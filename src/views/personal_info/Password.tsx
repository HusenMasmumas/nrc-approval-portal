import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { StyledButton, StyledInputPassword } from "components/styled/Styled";

const Password = () => {
  const [form] = useForm();
  const onFinish = () => {};
  return (
    <Form onFinish={onFinish} form={form}>
      <div className="text-[20px]">เปลี่ยนรหัสผ่าน</div>
      <div className="mt-[15px]">รหัสผ่านของคุณ</div>
      <Form.Item name="passwordOld" rules={[{ required: true }]}>
        <StyledInputPassword />
      </Form.Item>
      <div className="text-[#E02020]">ลืมรหัสผ่านหรือไม่?</div>
      <div className="mt-[30px]">รหัสผ่านใหม่</div>
      <div className="text-[#868E96]">
        รหัสผ่านที่ปลอดภัยที่สุดคือต้องมีความยาวอย่างน้อย 8 อักขระและมีตัวอักษร
        ตัวเลข และสัญลักษณ์ผสมกัน
      </div>
      <Form.Item name="newPassword" rules={[{ required: true }]}>
        <StyledInputPassword />
      </Form.Item>

      <div>ยืนยันรหัสผ่านใหม่</div>
      <Form.Item name="confirmPassword" rules={[{ required: true }]}>
        <StyledInputPassword />
      </Form.Item>

      <div>
        <StyledButton
          className="pl-[40px] pr-[40px]"
          thm={{ width: "auto" }}
          htmlType="submit"
        >
          บันทึกข้อมูล
        </StyledButton>
      </div>
    </Form>
  );
};

export default Password;
