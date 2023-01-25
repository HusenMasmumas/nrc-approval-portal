import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import CModal from "components/modal/Modal";
import CSelect from "components/select/Selector";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  isModalOpen: boolean;
  onClick: (e: boolean) => void;
};

const ModalAddUserStation: FC<Props> = ({ isModalOpen, onClick }) => {
  const { t } = useTranslation();
  const [addUser] = useForm();
  const onFinish = (value: any) => {
    onClick(false);
    console.log(value);
  };
  return (
    <CModal
      open={isModalOpen}
      title="เพิ่มผู้ใช้งาน"
      onOk={() => onClick(false)}
      onCancel={() => onClick(false)}
      body={
        <>
          <Form name="addUser" onFinish={onFinish} form={addUser}>
            <div>อีเมล</div>
            <div className="text-[#6C757D] pb-[10px]">
              โปรดใส่อีเมล เพื่อเชิญเข้าใช้งานสถานี
            </div>
            <div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="ใส่อีเมล" type="email" />
              </Form.Item>
            </div>
            <div>บทบาทในทีม</div>
            <Form.Item
              name="station_attendant"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CSelect
                placeholder="ผู้ดูแลสถานี"
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
            <div>สถานี</div>
            <Form.Item
              name="station"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CSelect
                placeholder="เลือกสถานี"
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
            </Form.Item>{" "}
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
              onClick={() => onClick(false)}
            >
              {t("cancel")}
            </StyledButton>
          </div>
          <div>
            <StyledButton onClick={() => addUser.submit()} htmlType="submit">
              {t("เพิ่มผู้ใช้งาน")}
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default ModalAddUserStation;
