import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/lib/form/Form";
import CModal from "components/modal/Modal";
import CSelect from "components/select/Selector";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  isModalOpen: boolean;
  onManageModal: (e: boolean) => void;
};

const FormAddHelpInfo: FC<Props> = ({ isModalOpen, onManageModal }) => {
  const { t } = useTranslation();
  const [formAddHelpInfo] = useForm();
  const onFinish = (data: any) => {};
  return (
    <CModal
      open={isModalOpen}
      title="เพิ่มข้อมูล"
      onOk={() => onManageModal(false)}
      onCancel={() => onManageModal(false)}
      body={
        <>
          <Form name="addUser" onFinish={onFinish} form={formAddHelpInfo}>
            <div className="text-[#23272B]">คำถาม</div>
            <div>
              <Form.Item
                name="question"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="ใส่คำถาม" />
              </Form.Item>
            </div>

            <div>คำอธิบาย / คำตอบ</div>
            <div>
              <Form.Item
                name="answer"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea maxLength={100} style={{ height: 100 }} />
              </Form.Item>
            </div>

            <div>หมวดหมู่</div>
            <Form.Item
              name="category_name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CSelect
                placeholder="ชื่อหมวดหมู่"
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
                keyName="label"
                keyValue="label"
              />
            </Form.Item>
          </Form>
        </>
      }
      footerRender={
        <>
          <div>
            <StyledButton
              thm={{
                bg: "#ffffff",
                color: "#141414",
                border: "#E0E0E0",
              }}
              onClick={() => onManageModal(false)}
            >
              {t("ยกเลิก")}
            </StyledButton>
          </div>
          <div>
            <StyledButton
              onClick={() => formAddHelpInfo.submit()}
              htmlType="submit"
            >
              {t("บันทึกข้อมูล")}
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default FormAddHelpInfo;
