import { FC } from "react";

interface CHeaderContent {
  title: string;
  navigation?: string[];
}

type Prototype = {
  Navigation: FC<CHeaderContent>;
};

const HeaderContent: FC<CHeaderContent> & Prototype = ({ title }) => {
  return (
    <div>
      <div className="text-2xl">{title}</div>
      <div>ทั้งหมด(5)</div>
    </div>
  );
};

const Navigation: FC<CHeaderContent> = ({ navigation, title }) => {
  return (
    <div>
      <div className="text-2xl">{title}</div>
      <div className="text-[#525F7F]">
        {navigation?.map((item, i) => {
          return (
            <span>{`${item} ${i + 1 !== navigation?.length ? "/" : ""} `}</span>
          );
        })}
      </div>
    </div>
  );
};
HeaderContent.Navigation = Navigation;
export default HeaderContent;
