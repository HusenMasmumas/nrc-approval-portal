import { Form, Upload } from "antd";
import { useForm } from "antd/es/form/Form";
import MoImage from "components/image/Image";
import {
  StyledButton,
  StyledInputNoBorder,
  StyledLine,
} from "components/styled/Styled";
import { FormInstance } from "rc-field-form";
import { useEffect } from "react";
import styled from "styled-components";
import { fileToDataUrl } from "tools/util";

const StyledFormItem = styled(Form.Item)`
  &.ant-form-item {
    margin-bottom: auto !important;
  }
`;

const Personal = () => {
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue({
      username: "Sukanya_admin",
      name: "สุกัญญา",
      lastName: "-",
      email: "Sukanya@gmail.com",
      phone: "-",
      address: "-",
    });
    // eslint-disable-next-line
  }, []);

  const getFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const getFileName = () => {
    return false;
  };

  const onFinish = () => {};
  return (
    <div>
      <Form onFinish={onFinish} form={form}>
        <div className="text-[20px]">ข้อมูลส่วนตัว</div>
        <div className="mt-[15px]">รูปโปรไฟล์</div>
        <div className="text-[#868E96] text-[13px]">
          รูปภาพ 600px x 600px JPG/GIF/PNG จะดีที่สุด
        </div>

        <div className="mt-[10px]">
          <Form.Item
            noStyle
            shouldUpdate={(prev, next) => prev.avatar !== next.avatar}
          >
            {(form: FormInstance) => {
              const image = form.getFieldValue("avatar");

              return (
                <MoImage
                  className="rounded-full drop-shadow-profile border-[4px] border-[#F6F9FC]"
                  src={image || ""}
                  height={100}
                />
              );
            }}
          </Form.Item>
        </div>
        <StyledFormItem
          name="image"
          valuePropName="fileList"
          getValueFromEvent={getFile}
        >
          <Upload
            accept=".png,.JPG,.gif"
            beforeUpload={getFileName}
            showUploadList={false}
            listType="text"
            maxCount={1}
            onChange={(e) => {
              const { status } = e.fileList?.[0];
              if (status !== "done") {
                fileToDataUrl?.(
                  e.fileList?.[0].originFileObj || new File([], "avatar")
                )?.then((data) => {
                  form.setFieldsValue({ [`avatar`]: data });
                });
              }
            }}
          >
            <div className="text-[#0064FF]">อัพโหลดภาพใหม่</div>
          </Upload>
        </StyledFormItem>

        <div className=" grid grid-cols-12 ">
          <div className="col-span-3  ">
            <div className="h-[40px] flex items-center">ชื่อผู้ใช้งาน</div>
          </div>
          <div className="col-span-9">
            <StyledFormItem name="username" rules={[{ required: true }]}>
              <StyledInputNoBorder />
            </StyledFormItem>
          </div>
          <StyledLine className=" col-span-12" />
          <div className="col-span-3  ">
            <div className="h-[40px] flex items-center">ชื่อจริง</div>
          </div>
          <div className="col-span-9">
            <StyledFormItem name="name" rules={[{ required: true }]}>
              <StyledInputNoBorder />
            </StyledFormItem>
          </div>
          <StyledLine className="col-span-12" />
          <div className="col-span-3  ">
            <div className="h-[40px] flex items-center">นามสกุล</div>
          </div>
          <div className="col-span-9">
            <StyledFormItem name="lastName" rules={[{ required: true }]}>
              <StyledInputNoBorder />
            </StyledFormItem>
          </div>
          <StyledLine className="col-span-12" />
          <div className="col-span-12 text-[18px]">ช่องทางการติดต่อ</div>
          <div className="col-span-3  ">
            <div className="h-[40px] flex items-center">Email</div>
          </div>
          <div className="col-span-9">
            <StyledFormItem name="email" rules={[{ required: true }]}>
              <StyledInputNoBorder type="email" />
            </StyledFormItem>
          </div>
          <StyledLine className="col-span-12" />
          <div className="col-span-3  ">
            <div className="h-[40px] flex items-center">เบอร์โทรศัพท์</div>
          </div>
          <div className=" col-span-9">
            <StyledFormItem name="phone" rules={[{ required: true }]}>
              <StyledInputNoBorder />
            </StyledFormItem>
          </div>
          <StyledLine className="col-span-12" />
          <div className="col-span-3  ">
            <div className="h-[40px] flex items-center">ที่อยู่</div>
          </div>
          <div className="col-span-9">
            <StyledFormItem name="address" rules={[{ required: true }]}>
              <StyledInputNoBorder />
            </StyledFormItem>
          </div>
          <StyledLine className="col-span-12 mb-[10px]" />
        </div>
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
    </div>
  );
};

export default Personal;
