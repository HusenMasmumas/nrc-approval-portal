import { IAppContext } from "./interface";
import { createContext, useContext } from "react";

const MainAppContext = createContext<IAppContext>({} as IAppContext);

const MainAppProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: any;
}) => {
  return (
    <MainAppContext.Provider value={{ ...value }}>
      {children}
    </MainAppContext.Provider>
  );
};

export const useMainApp = () => useContext(MainAppContext);
export default MainAppProvider;
