import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navMenu from "nav";

interface INavMenu {
  keyName: string;
  name: string;
  icon: string;
  link: string;
  children?: INavMenu;
}

type Props = {
  collapsed?: boolean;
};
const SidebarLayout: FC<Props> = ({ collapsed }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const { t } = useTranslation();
  let navigate = useNavigate();

  const gotoMenu = (k: any) => {
    navigate(k?.link);
  };

  const setValueSelectedKeys = (data: string[]) => {
    setSelectedKeys(data);
  };
  const activeMenu = (value: INavMenu) => {
    return selectedKeys?.some((item) => {
      return item.toLocaleUpperCase() === value?.keyName.toLocaleUpperCase();
    });
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
                          <div className="text-[#141414] pl-[40px] flex text-[15px]  items-center h-[40px]">
                            {t(child?.name)}
                          </div>
                          <div>
                            {child?.children?.map((childChildren, i) => {
                              return (
                                <div
                                  key={i}
                                  className="text-[#141414] hover:text-[#E02020] pl-[40px] flex text-[15px]  items-center h-[40px] circle"
                                >
                                  <div className="circle-menu-bar"></div>
                                  <div className="text-[12px] ml-5 ">
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
