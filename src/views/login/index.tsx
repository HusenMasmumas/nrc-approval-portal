import { Checkbox, Form } from "antd";
import { useNavigate } from "react-router-dom";
import Logo from "assets/img/Logo.svg";
import "index.css";
import {
  StyledButton,
  StyledInput,
  StyledInputPassword,
} from "components/styled/Styled";
import MoImage from "components/image/Image";

const Login = () => {
  let navigate = useNavigate();

  const forgotPassword = () => {
    navigate("/forgot-password", {
      replace: true,
    });
  };
  const onFinish = () => {
    localStorage.setItem("token", "Tom");
    navigate("/dashboard", {
      replace: true,
    });
  };

  return (
    <Form onFinish={onFinish}>
      <div className=" flex h-screen justify-center font-NotoSansThai ">
        <div className="m-auto">
          <div className="flex justify-center mb-[40px]">
            <MoImage height={40} src={Logo} preview={false} />
          </div>

          <div className=" bg-white h-[440px] w-[400px] p-[40px]">
            <div className="text-[32px] text-[#343A40] ">เข้าสู่ระบบ</div>
            <div className="text-[#6C757D]">
              ยินดีต้อนรับอีกครัง ! กรุณาเข้าสู่ระบบบัญชีของคุณ
            </div>
            <div className="grid grid-cols-1 gap-[7px]">
              <div className=" mt-[15px]">อีเมลหรือชื่อผู้ใช้</div>
              <div className=" h-[50px]">
                <Form.Item name="username" rules={[{ required: true }]}>
                  <StyledInput />
                </Form.Item>
              </div>
              <div>รหัสผ่าน</div>
              <div className=" h-[50px]">
                <Form.Item name="password" rules={[{ required: true }]}>
                  <StyledInputPassword />
                </Form.Item>
              </div>
            </div>
            <div className=" mt-[15px] grid grid-cols-1 gap-[15px]">
              <div className=" items-center  flex">
                <div>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>จดจำฉัน</Checkbox>
                  </Form.Item>
                </div>

                <div
                  className=" ml-auto text-[#BC1B1C] cursor-pointer hover:font-bold "
                  onClick={forgotPassword}
                >
                  ลืมรหัสผ่าน?
                </div>
              </div>

              <div className=" mb-10" style={{ textAlign: "center" }}>
                <StyledButton
                  // thm={{
                  //   height: "45px",
                  // }}
                  htmlType="submit"
                >
                  เข้าสู่ระบบ
                </StyledButton>
              </div>
            </div>
          </div>

          <div
            style={{ fontFamily: "NotoSansThaiMedium" }}
            className="text-NotoSansThaiBold text-[#141414] mt-[15px] text-center  "
          >
            Copyright © 2020 NRC. All rights reserved.
          </div>
        </div>
      </div>
    </Form>
  );
};

export default Login;
