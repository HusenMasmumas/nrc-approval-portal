import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import navMenu from "nav";

type Props = {
  collapsed?: boolean;
};
const SidebarLayout: FC<Props> = ({ collapsed }) => {
  const { t } = useTranslation();
  let navigate = useNavigate();

  const gotoMenu = (k: any) => {
    navigate(k?.link);
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
                <div
                  onClick={() => gotoMenu(item)}
                  className="text-[#141414] hover:bg-[#FFF5F5] hover:text-[#E02020]  cursor-pointer flex text-[15px] pl-[40px] items-center h-[40px]"
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
