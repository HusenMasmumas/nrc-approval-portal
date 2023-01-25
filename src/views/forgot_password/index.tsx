import { Form } from "antd";
import { StyledButton, StyledInput } from "components/styled/Styled";
import Logo from "assets/img/Logo.svg";
import { useNavigate } from "react-router-dom";
import CImage from "components/image/Image";

const ForgotPassword = () => {
  let navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login", {
      replace: true,
    });
  };
  const onFinish = (data: any) => {};
  return (
    <Form onFinish={onFinish}>
      <div className=" flex h-screen justify-center  font-NotoSansThai ">
        <div className="m-auto">
          <div className="flex justify-center mb-[40px]">
            <CImage height={40} src={Logo} preview={false} />
          </div>

          <div className=" bg-white h-[440px] w-[400px] p-[40px]">
            <div className="text-[32px] text-[#343A40] ">ลืมรหัสผ่าน</div>
            <div className="text-[#6C757D]">
              กรุณากรอกอีเมลของคุณ เราจะส่งลิงก์สำหรับตั้งรหัสผ่านใหม่ให้คุณ
            </div>
            <div className="grid grid-cols-1 gap-[7px]">
              <div className=" mt-[15px]">อีเมล</div>
              <div className=" h-[50px]">
                <Form.Item name="username" rules={[{ required: true }]}>
                  <StyledInput type="email" />
                </Form.Item>
              </div>
            </div>
            <div className="mt-[15px] grid grid-cols-1 gap-[15px]">
              <div className=" mb-[20px]" style={{ textAlign: "center" }}>
                <StyledButton htmlType="submit">ส่งคำขอ</StyledButton>
              </div>
            </div>
            <div className="text-[#6C757D]">
              <span>หากคุณยังต้องการความช่วยเหลือ โปรดติดต่อ</span>
              <span className="underline underline-offset-[1px]">
                ฝ่ายสนับสนุนของ NRC
              </span>
            </div>
            <div className="border-b-[1px] pt-[20px] border-textBlack"></div>
            <div
              className="text-textBlack flex justify-center mt-[20px] cursor-pointer hover:font-bold"
              onClick={gotoLogin}
            >
              กลับหน้าเข้าสู่ระบบ
            </div>
          </div>

          <div
            style={{ fontFamily: "NotoSansThaiMedium" }}
            className="text-NotoSansThaiBold text-textBlack mt-[15px] text-center  "
          >
            Copyright © 2020 NRC. All rights reserved.
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ForgotPassword;
