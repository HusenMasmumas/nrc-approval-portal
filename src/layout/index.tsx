import "./index.css";
import NavManu from "nav";
import SidebarLayout from "./SidebarLayout";
import ContentLayout from "./ContentLayout";
import HeaderLayout from "./HeaderLayout";
import { useRef } from "react";
import { useLocation } from "react-router-dom";

type Props = {};

export interface IMenu {
  keyName: string;
  name: string;
  icon?: string;
  link: string;
}

export const ManageNavMenu = () => {
  const navMenu: IMenu[] = NavManu?.filter((item) => {
    return item;
  });
  // const navMenu: IMenu[] = NavManu?.filter((item) => {
  //   return ManageCurrentMenu()?.some(
  //     (c: any) => item?.keyName === c?.name && c?.active
  //   );
  // });

  return navMenu;
};

const DefaultLayout = (props: Props) => {
  const sc = useRef<any>();
  const { pathname } = useLocation();
  // useEffect(() => {
  //   sc.current.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);
  return (
    <>
      <div className=" h-[100vh]">
        <HeaderLayout />
        <div className="flex flex-[row wrap]">
          <SidebarLayout />

          <div className="flex flex-col bg-[#F6F9FC] ">
            <div
              ref={sc}
              className="w-[calc(100vw-260px)]   h-[calc(100vh-70px)] overflow-y-auto"
            >
              <div className="p-[30px]  ">
                <ContentLayout />
                <div className="pt-[30px] text-10 ">
                  Copyright © 2020 NRC. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
