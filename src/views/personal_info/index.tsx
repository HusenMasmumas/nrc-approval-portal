import MoImage from "components/image/Image";
import { StyledLine } from "components/styled/Styled";
import { Fragment, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Notification from "./Notification";
import Password from "./Password";
import Personal from "./Personal";

const StyledMenu = styled.div`
  ${tw`p-[13px] hover:bg-[#F6F9FC] hover:text-[#E02020] cursor-pointer mx-[5px] my-[1px]`}
`;

const menu = [
  {
    name: "ข้อมูลส่วนตัว",
    key: 1,
  },
  {
    name: "เปลี่ยนรหัสผ่าน",
    key: 2,
  },
  {
    name: "แจ้งเตือน",
    key: 3,
  },
  {
    name: "ช่วยเหลือ",
    key: 4,
  },
];

const render: {
  [key: number]: {
    menu: JSX.Element;
  };
} = {
  1: {
    menu: <Personal />,
  },
  2: {
    menu: <Password />,
  },
  3: {
    menu: <Notification />,
  },
};

const PersonalInfo = () => {
  const [keyMenu, setKeyMenu] = useState(1);

  const onSetKeyMenu = (key: number) => {
    setKeyMenu(key);
  };
  return (
    <div>
      <div className="bg-white w-full h-[158px] border border-[#E6E9ED] flex py-[17px] px-[13px] rounded-[5px]">
        <div>
          <MoImage
            className="rounded-full drop-shadow-profile border-[3px] border-[#F6F9FC]"
            src={""}
            height={100}
          />
        </div>
        <div className=" flex flex-col pl-[10px]">
          <div className="text-[25px]">Sukanya_admin</div>
          <div className="text-[#868E96]">เข้าร่วมเมื่อ 10 ธ.ค. 2555</div>
          <div>
            <span className="text-[#868E96]">Membership : </span>
            <span>เจ้าหน้าที่</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-[30px]">
        <div className="col-span-3 rounded-[5px]">
          <div className=" bg-white w-full border border-[#E6E9ED]  rounded-[5px]">
            <div className="flex flex-col pb-[3px]">
              <div className="p-[14px] text-[20px]">ตั้งค่า</div>
              <StyledLine className="my-[3px]" />
              {menu?.map((item, i) => {
                return (
                  <Fragment key={item?.key}>
                    {i + 1 === menu?.length && (
                      <StyledLine className="my-[3px]" />
                    )}
                    <StyledMenu
                      className={`${
                        keyMenu === item?.key
                          ? "bg-[#F6F9FC] text-[#E02020]"
                          : ""
                      }`}
                      onClick={() => onSetKeyMenu(item?.key)}
                    >
                      {item?.name}
                    </StyledMenu>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-span-9  rounded-[5px]">
          <div className=" bg-white w-full p-[17px] border border-[#E6E9ED]  rounded-[5px]">
            {render?.[keyMenu]?.menu}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
