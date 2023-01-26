import { useTranslation } from "react-i18next";
import { Badge, Popover } from "antd";
import LogoHeader from "assets/img/LogoHeader.svg";
import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import {
  StyledAvatarNone,
  StyledInput,
  StyledLine,
} from "components/styled/Styled";
import CImage from "components/image/Image";
import CSelect from "components/select/Selector";
import styled from "styled-components";
import tw from "twin.macro";
import { useNavigate } from "react-router-dom";

export const StyledMenu = styled.div`
  &:hover {
    color: #e02020;
  }
  ${tw`pt-[10px]  cursor-pointer`};
`;

const HeaderLayout = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("local-lang", lang);
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", {
      replace: true,
    });
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
        <CImage src={LogoHeader} preview={false} height={35} />
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
              <CSelect
                Source={[
                  {
                    value: "th",
                    label: "TH",
                  },
                  {
                    value: "en",
                    label: "EN",
                  },
                ]}
                value={i18n.language === "th" ? "th" : "en"}
                onChange={changeLanguage}
                keyName="label"
                keyValue="value"
              />
            </div>
            <div className="pr-[20px] ">
              <Badge count={5}>
                <BellOutlined className="text-[20px]" />
              </Badge>
            </div>
            <div>
              <Popover
                placement="bottomRight"
                overlayStyle={{
                  paddingTop: "0px",
                  width: 190,
                }}
                trigger="click"
                content={
                  <div>
                    <div className="mt-[10px]">Sukanya_admin </div>
                    <div className="text-[#0064FF] mt-[10px] cursor-pointer">
                      ข้อมูลส่วนตัว
                    </div>
                    <StyledLine className="border-[#F0F0F0] mt-[10px]" />
                    <StyledMenu>งานของฉัน</StyledMenu>
                    <StyledMenu>การตั้งค่า</StyledMenu>
                    <StyledMenu>ข้อความ</StyledMenu>
                    <StyledMenu>ช่วยเหลือ</StyledMenu>
                    <StyledMenu onClick={() => logout()}>ออกจากระบบ</StyledMenu>
                  </div>
                }
              >
                <StyledAvatarNone size={40} icon={<UserOutlined />} />
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
