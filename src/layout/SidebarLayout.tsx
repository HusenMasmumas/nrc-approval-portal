import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navMenu from "nav";
import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface INavMenu {
  keyName: string;
  name: string;
  icon: string;
  link: string;
  children?: INavMenu[];
}

interface IManageMenu {
  selectedKeys: string[];
  openMenu: string[];
}

type Props = {
  collapsed?: boolean;
};

const SidebarLayout: FC<Props> = ({ collapsed }) => {
  const [manageMenu, setManageMenu] = useState<IManageMenu>({} as IManageMenu);
  const { t } = useTranslation();
  let navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    let path = pathname.split("/");
    setManageMenu({
      ...manageMenu,
      selectedKeys: [path?.[1] || "", path?.[3] || ""],
    });

    // eslint-disable-next-line
  }, []);

  const gotoMenu = (k: any) => {
    navigate(k?.link);
  };

  const setValueSelectedKeys = (data: string[]) => {
    setManageMenu({
      ...manageMenu,
      selectedKeys: data,
    });
  };

  const checkKeyOpenMenu = (data: string) => {
    return manageMenu?.openMenu?.includes(data);
  };

  const setValueOpenMenu = (data: string) => {
    if (manageMenu?.openMenu?.includes(data)) {
      setManageMenu({
        ...manageMenu,
        openMenu: manageMenu?.openMenu?.filter((item) => {
          return item.toLocaleLowerCase() !== data.toLocaleLowerCase();
        }),
      });
    } else {
      setManageMenu({
        ...manageMenu,
        openMenu: [...(manageMenu?.openMenu || []), data],
      });
    }
  };
  const activeMenu = (value: INavMenu) => {
    return (
      manageMenu?.selectedKeys?.findIndex((item) => {
        return item.toLocaleUpperCase() === value?.keyName.toLocaleUpperCase();
      }) > -1
    );
  };

  return (
    <div
      style={{
        flex: "0 0 260px",
        position: "relative",
        borderRight: "2px solid #bebebe5e",
      }}
      className=" w-[260px] overflow-y-auto  bg-white  h-[calc(100vh-70px)]"
    >
      <div>
        {navMenu?.map((item, index) => {
          return (
            <div key={index}>
              {!!item?.children ? (
                <div>
                  <div className="mt-[20px] pl-[40px] mb-[7px] text-[11px] text-[#76767A]">
                    {t(item?.name)}
                  </div>
                  {item?.children?.map((child, indexChild) => {
                    if (!!child?.children) {
                      return (
                        <div key={indexChild}>
                          <div
                            className="flex items-center cursor-pointer h-[40px] hover:text-[#E02020]"
                            onClick={() => setValueOpenMenu(child.keyName)}
                          >
                            <div
                              className={` pl-[40px] flex text-[15px]  items-center h-[40px]${
                                !!activeMenu(child)
                                  ? "bg-[#FFF5F5] text-[#E02020] "
                                  : "hover:bg-[#FFF5F5]  "
                              }`}
                            >
                              {t(child?.name)}
                            </div>
                            <div className="ml-auto pr-[20px] ">
                              <span className=" text-[13px] ">
                                {React.createElement(
                                  checkKeyOpenMenu(child.keyName)
                                    ? UpOutlined
                                    : DownOutlined
                                )}
                              </span>
                            </div>
                          </div>

                          <div
                            className={`${
                              !!checkKeyOpenMenu(child.keyName)
                                ? "open_menu"
                                : "close_menu"
                            }`}
                          >
                            {child?.children?.map((childChildren, i) => {
                              return (
                                <div
                                  key={i}
                                  onClick={() => {
                                    gotoMenu(child);
                                    setValueSelectedKeys([
                                      child?.keyName,
                                      childChildren?.keyName,
                                    ]);
                                  }}
                                  className={` hover:text-[#E02020] pl-[40px] flex text-[15px] cursor-pointer items-center h-[40px] circle`}
                                >
                                  <div
                                    className={`${
                                      !!activeMenu(childChildren)
                                        ? "circle-menu-bar-red"
                                        : "circle-menu-bar-black"
                                    }`}
                                  ></div>
                                  <div
                                    className={`text-[12px] ml-5 ${
                                      !!activeMenu(childChildren)
                                        ? "text-[#E02020]"
                                        : ""
                                    }`}
                                  >
                                    {t(childChildren?.name)}
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
                        <div
                          onClick={() => {
                            gotoMenu(child);
                            setValueSelectedKeys([child?.keyName]);
                          }}
                          className={`text-[#141414] pl-[40px] flex text-[15px] cursor-pointer items-center h-[40px] ${
                            !!activeMenu(child)
                              ? "bg-[#FFF5F5] text-[#E02020] "
                              : "hover:bg-[#FFF5F5] hover:text-[#E02020] "
                          }`}
                        >
                          {t(child?.name)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div
                  onClick={() => {
                    gotoMenu(item);
                    setValueSelectedKeys([item.keyName]);
                  }}
                  className={`text-[#141414] cursor-pointer flex text-[15px] pl-[40px] items-center h-[40px] ${
                    !!activeMenu(item)
                      ? "bg-[#FFF5F5] text-[#E02020] "
                      : "hover:bg-[#FFF5F5] hover:text-[#E02020] "
                  } `}
                >
                  {t(item?.name)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarLayout;
