import { ManageNavMenu } from "layout";
import MainAppProvider from "providers/app";
import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { IAuthContext } from "./interface";

const AuthProviderContext = createContext<IAuthContext>({});

const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    let menuInfo = ManageNavMenu();
    let part = menuInfo[0]?.link;
    const _redirect = () => {
      if (pathname === "/login") {
        navigate(part, { replace: true });
      }
      if (!token) {
        return navigate("/login", { replace: true });
      }
    };
    _redirect();
    // eslint-disable-next-line
  }, [navigate, pathname]);

  //   if (isLoading && !isRefetching) {
  //     return <LoadingPage loading={true} />;
  //   }

  //   if (isError || !data) {
  //     return <ErrorPage />;
  //   }

  return (
    <MainAppProvider value={{}}>
      <>{children}</>
    </MainAppProvider>
  );
};
export const useAuth = () => useContext(AuthProviderContext);
export default AuthProvider;
