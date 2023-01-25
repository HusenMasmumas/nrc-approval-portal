import { IAuthorizationRequestInfoContext } from "./interface";
import { createContext, useContext } from "react";

const MainAuthorizationRequestInfoContext =
  createContext<IAuthorizationRequestInfoContext>(
    {} as IAuthorizationRequestInfoContext
  );

const MainAuthorizationRequestInfoProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: any;
}) => {
  return (
    <MainAuthorizationRequestInfoContext.Provider value={{ ...value }}>
      {children}
    </MainAuthorizationRequestInfoContext.Provider>
  );
};

export const useMainAuthorizationRequestInfo = () =>
  useContext(MainAuthorizationRequestInfoContext);
export default MainAuthorizationRequestInfoProvider;
