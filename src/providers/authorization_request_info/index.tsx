import { ICoordinateContext } from "./interface";
import { createContext, useContext } from "react";

const MainCoordinateContext = createContext<ICoordinateContext>(
  {} as ICoordinateContext
);

const MainCoordinateProvider = ({
  children,
  value,
}: {
  children: JSX.Element;
  value: any;
}) => {
  return (
    <MainCoordinateContext.Provider value={{ ...value }}>
      {children}
    </MainCoordinateContext.Provider>
  );
};

export const useMainCoordinate = () => useContext(MainCoordinateContext);
export default MainCoordinateProvider;
