import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navMenu from "nav";
import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

interface INavMenu {
  keyName: string;
  name: string;
  icon: any;
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
      openMenu: [
        "manage-station-info",
        "manage-help-info",
        "manage-departments",
      ],
    });

    // eslint-disable-next-line
  }, []);

  const gotoMenu = (k: any) => {
    navigate(k?.link, { replace: true });
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
        flex: "0 0 39.1vmin",
        position: "relative",
        borderRight: "2px solid #bebebe5e",
      }}
      className=" w-[39.1vmin] overflow-y-auto  bg-white  h-[calc(100vh-9.9vmin)]"
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
                  {item?.children?.map((child: INavMenu, indexChild) => {
                    if (!!child?.children) {
                      return (
                        <div key={indexChild}>
                          <div
                            className="flex items-center cursor-pointer h-[40px] hover:text-[#E02020] icon-menu-h"
                            onClick={() => setValueOpenMenu(child.keyName)}
                          >
                            <div
                              className={` pl-[40px] flex text-[13px]  items-center h-[40px]${
                                !!activeMenu(child)
                                  ? "bg-[#FFF5F5] text-[#E02020] icon-menu"
                                  : "hover:bg-[#FFF5F5] "
                              }`}
                            >
                              <div>{child?.icon}</div>
                              <div className="ml-[6px]">{t(child?.name)}</div>
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
                                    gotoMenu(childChildren);
                                    setValueSelectedKeys([
                                      child?.keyName,
                                      childChildren?.keyName,
                                    ]);
                                  }}
                                  className={` hover:text-[#E02020] pl-[60px] flex  cursor-pointer items-center h-[40px] circle `}
                                >
                                  <div
                                    className={`${
                                      !!activeMenu(childChildren)
                                        ? "circle-menu-bar-red"
                                        : "circle-menu-bar-black"
                                    }`}
                                  ></div>
                                  <div
                                    className={`text-[12px] ml-[10px] ${
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
                          className={`text-[#141414] pl-[40px] flex cursor-pointer items-center h-[40px] ${
                            !!activeMenu(child)
                              ? "bg-[#FFF5F5] text-[#E02020]  icon-menu "
                              : "hover:bg-[#FFF5F5] hover:text-[#E02020] icon-menu-h"
                          }`}
                        >
                          <div>{child?.icon}</div>
                          <div className="ml-[6px]">{t(child?.name)}</div>
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
                  className={` cursor-pointer flex   pl-[40px] items-center h-[40px]  ${
                    !!activeMenu(item)
                      ? "bg-[#FFF5F5] text-[#E02020] icon-menu"
                      : "hover:bg-[#FFF5F5] hover:text-[#E02020] icon-menu-h text-[#141414]"
                  } `}
                >
                  <div>{item?.icon}</div>

                  <div className="ml-[10px]">{t(item?.name)}</div>
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
