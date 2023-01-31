import "./index.css";
import NavManu from "nav";
import SidebarLayout from "./SidebarLayout";
import ContentLayout from "./ContentLayout";
import HeaderLayout from "./HeaderLayout";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import { useIsFetching } from "@tanstack/react-query";

type Props = {};

export interface IMenu {
  keyName: string;
  name: string;
  icon?: any;
  link?: string;
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
  const isFetching = useIsFetching();
  const sc = useRef<any>();
  const { pathname } = useLocation();
  useEffect(() => {
    sc.current.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Spin
        spinning={isFetching ? true : false}
        size="large"
        tip="กำลังโหลด..."
        delay={500}
      >
        <div className=" h-[100vh] ">
          <HeaderLayout />
          <div className="flex flex-[row wrap]">
            <SidebarLayout />

            <div className="flex flex-col bg-[#F6F9FC] text-[15px] ">
              <div
                ref={sc}
                className="w-[calc(100vw-39.1vmin)]   h-[calc(100vh-9.9vmin)] overflow-y-auto"
              >
                <div className="p-[30px]  ">
                  <ContentLayout />
                  <div className="pt-[30px] text-10 font-NotoSansThai ">
                    Copyright © 2020 NRC. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Spin>
    </>
  );
};

export default DefaultLayout;
