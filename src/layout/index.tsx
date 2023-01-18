import { useState } from "react";
import { useTranslation } from "react-i18next";
import NavManu from "nav";
import { Col, Layout, Row, Select } from "antd";

import SidebarLayout from "./_SidebarLayout";
import { Header } from "antd/es/layout/layout";
import ContentLayout from "./ContentLayout";
import navMenu from "nav";

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
  const { i18n } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("local-lang", lang);
  };
  return (
    <div className=" h-[100vh]">
      <div
        style={{ borderBottom: "2px solid #bebebe5e " }}
        className="  h-[70px]  mt-auto bg-white"
      >
        header
      </div>
      <div style={{ flexDirection: "row" }}>
        <div
          style={{ flex: "0 0 260px", position: "relative" }}
          className=" w-[260px] overflow-y-auto  bg-white  h-[calc(100vh-70px)]"
        >
          <div>
            {navMenu?.map((item, index) => {
              return (
                <div key={index}>
                  {!!item?.children ? (
                    <div>
                      <div className="mt-[20px] pl-[40px] mb-[7px] text-[11px] text-[#76767A]">
                        {item?.name}
                      </div>
                      {item?.children?.map((child, indexChild) => {
                        if (!!child?.children) {
                          return (
                            <div key={indexChild}>
                              <div className="text-[#141414]  flex text-[15px]  items-center h-[40px]">
                                {child?.name}
                              </div>
                              <div>
                                {child?.children?.map((childChildren, i) => {
                                  return (
                                    <div
                                      key={i}
                                      className="text-[#141414]  flex text-[15px]  items-center h-[40px]"
                                    >
                                      <div
                                        style={{
                                          display: "inline-block",
                                          borderRadius: "50%",
                                          width: "7px",
                                          height: "7px",
                                          border: "1px solid #000000",
                                        }}
                                      ></div>
                                      <div className="ml-5">
                                        {childChildren?.name}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        }

                        return (
                          <div key={indexChild}>
                            <div className="text-[#141414] pl-[40px] flex text-[15px]  items-center h-[40px]">
                              {child?.name}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-[#141414] hover:bg-[#FFF5F5] hover:text-[#E02020]  cursor-pointer flex text-[15px] pl-[40px] items-center h-[40px]">
                      {item?.name}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-[calc(100vw-260px)] bg-[#F6F9FC]  h-[calc(100vh-70px)]"></div>
      </div>
    </div>
    // <Layout style={{ minHeight: "100vh" }}>
    //   <div style={{ height: 70, boxShadow: "0px 10px 50px #BEBEBE " }}>
    //     <Header style={{}}>
    //       <Row>
    //         <Col>
    //           <div className="logo" />
    //         </Col>
    //         <Col className=" ml-auto">
    //           <Select
    //             value={i18n.language === "th" ? "th" : "en"}
    //             showSearch
    //             onChange={changeLanguage}
    //             options={[
    //               {
    //                 value: "th",
    //                 label: "TH",
    //               },
    //               {
    //                 value: "en",
    //                 label: "EN",
    //               },
    //             ]}
    //           />
    //         </Col>
    //       </Row>
    //     </Header>
    //   </div>

    //   <Layout>
    //     <SidebarLayout collapsed={collapsed} />{" "}
    //     <Layout style={{ marginLeft: 50, marginRight: 50 }}>
    //       <ContentLayout />
    //     </Layout>
    //   </Layout>
    // </Layout>
  );
};

export default DefaultLayout;
