import { useTranslation } from "react-i18next";
import { Select, Badge } from "antd";
import LogoHeader from "assets/img/LogoHeader.svg";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { StyledAvatarNone, StyledInput } from "components/styled/Styled";
import MoImage from "components/image/Image";

const HeaderLayout = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("local-lang", lang);
  };

  return (
    <div
      style={{
        borderBottom: "2px solid #bebebe5e",
        paddingInline: 50,
        lineHeight: "9.9vmin",
      }}
      className="h-[9.9vmin]  bg-white"
    >
      <div className="flex flex-[row wrap] items-center ">
        {/* <div style={{ position: "relative", maxWidth: "100%" }}> */}
        <MoImage src={LogoHeader} preview={false} height={35} />
        {/* </div> */}
        <div className=" ml-auto">
          <div className="flex-[row wrap] flex items-center ">
            <StyledInput
              className="pr-[10px]"
              thm={{
                height: "40px",
                width: "389px",
                backgroundColor: "#F2F4F6",
              }}
              prefix={<SearchOutlined />}
              placeholder="ค้นหา"
            />

            <div className="pr-[20px] pl-[20px] ">
              <Select
                className=""
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
            <div className="pr-[20px] ">
              <Badge count={5}>
                <BellOutlined className="text-[20px]" />
              </Badge>
            </div>
            <div>
              <StyledAvatarNone size={40} icon={<UserOutlined />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
