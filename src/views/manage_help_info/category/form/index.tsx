import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useForm } from "antd/lib/form/Form";
import CModal from "components/modal/Modal";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  isModalOpen: boolean;
  onManageModal: (e: boolean) => void;
};

const FormAddCategory: FC<Props> = ({ isModalOpen, onManageModal }) => {
  const { t } = useTranslation();
  const [formAddCategory] = useForm();

  const onFinish = () => {};
  return (
    <CModal
      open={isModalOpen}
      title="เพิ่มหมวดหมู่"
      onOk={() => onManageModal(false)}
      onCancel={() => onManageModal(false)}
      body={
        <>
          <Form name="addUser" onFinish={onFinish} form={formAddCategory}>
            <div className="text-[#23272B] pb-[10px]">ชื่อหมวดหมู่</div>
            <div>
              <Form.Item
                name="category"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="ชื่อหมวดหมู่" />
              </Form.Item>
            </div>

            <div>คำอธิบาย</div>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <TextArea
                maxLength={100}
                style={{ height: 100, marginBottom: 24 }}
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
              onClick={() => formAddCategory.submit()}
              htmlType="submit"
            >
              {t("เพิ่มหมวดหมู่")}
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default FormAddCategory;
