import { useTranslation } from "react-i18next";
import NavManu from "nav";
import { Image, Select, Badge, Avatar } from "antd";
import SidebarLayout from "./_SidebarLayout";
import ContentLayout from "./ContentLayout";
import LogoHeader from "assets/img/LogoHeader.svg";
import { UserOutlined } from "@ant-design/icons";

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

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("local-lang", lang);
  };
  return (
    <>
      <div className=" h-[100vh]">
        <div
          style={{
            borderBottom: "2px solid #bebebe5e",
            paddingInline: 50,
            lineHeight: "70px",
          }}
          className="h-[70px]  bg-white"
        >
          <div className="flex flex-[row wrap] ">
            <div style={{ position: "relative", maxWidth: "100%" }}>
              <Image src={LogoHeader} preview={false} height={20} />
            </div>
            <div className=" ml-auto">
              <div className="flex-[row wrap] flex ">
                <div className="pr-[10px] ">
                  <Badge count={5}>
                    <Avatar shape="square" size="large" />
                  </Badge>
                </div>
                <div className="pr-[10px] ">
                  <Select
                    value={i18n.language === "th" ? "th" : "en"}
                    showSearch
                    onChange={changeLanguage}
                    options={[
                      {
                        value: "th",
                        label: "TH",
                      },
                      {
                        value: "en",
                        label: "EN",
                      },
                    ]}
                  />
                </div>
                <div>
                  <Avatar size={40} icon={<UserOutlined />} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[row wrap]">
          <SidebarLayout />
          <div className="w-[calc(100vw-260px)]  bg-[#F6F9FC]  h-[calc(100vh-70px)] overflow-y-auto">
            <div className="p-[30px] ">
              <ContentLayout />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
