import React, { FC } from "react";
type Props = {
  tab: { name: string; key: string }[];
  value?: string;
  onClick?: (e: string) => void;
};

const TabSearch: FC<Props> = ({ tab, value = "", onClick }) => {
  return (
    <div className="flex items-center">
      {tab?.map((item, i) => {
        return (
          <React.Fragment key={i}>
            <div
              className={`pr-[15px] ${
                value.toLocaleLowerCase() === item?.key.toLocaleLowerCase()
                  ? "text-[#E02020]"
                  : "text-[#6F7F91]"
              } cursor-pointer hover:text-[#E02020]`}
              onClick={() => onClick && onClick(item?.key)}
            >
              {item?.name}
            </div>
            {i + 1 < tab?.length ? (
              <div className=" w-[1px] h-[30px] bg-[#9ea1a551] mr-[15px]" />
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default TabSearch;
