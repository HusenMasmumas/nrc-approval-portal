import { ManageNavMenu } from "layout";
import MainAppProvider from "providers/app";
import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IAuthContext } from "./interface";

const pathPublic = ["/login", "/forgot-password"];

const AuthProviderContext = createContext<IAuthContext>({});

const AuthProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    let menuInfo = ManageNavMenu();
    let part = menuInfo[0]?.link || "";

    const _redirect = () => {
      if (pathname === "/login" || pathname === "/") {
        navigate(part, { replace: true });
      }
      if (!token) {
        const check = pathPublic?.some((path) => {
          return path.toLocaleLowerCase() === pathname.toLocaleLowerCase();
        });

        if (!!check) {
          return navigate(pathname, { replace: true });
        } else {
          return navigate("/login", { replace: true });
        }
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
