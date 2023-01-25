import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import CModal from "components/modal/Modal";
import CSelect from "components/select/Selector";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { useMainAuthorizationRequestInfo } from "providers/authorization_request_info";
import { useTranslation } from "react-i18next";

const ModalCoordinate = () => {
  const { t } = useTranslation();
  const { onClick, isModalOpen } = useMainAuthorizationRequestInfo();
  const [coordinate] = useForm();

  const onFinish = () => {
    onClick(false);
  };
  return (
    <CModal
      open={isModalOpen}
      title="รับเรื่อง"
      onOk={() => onClick(false)}
      onCancel={() => onClick(false)}
      body={
        <>
          <Form name="addUser" onFinish={onFinish} form={coordinate}>
            <div className="text-[18px] font-bold">เลขที่ : N161165005</div>
            <div className="text-[#23272B] pb-[10px]">สถานี</div>
            <div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="สถานี" />
              </Form.Item>
            </div>

            <div className="text-[#23272B] pb-[10px]">ผู้ติดต่อ</div>
            <div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="ผู้ติดต่อ" />
              </Form.Item>
            </div>
            <div>เจ้าหน้าที่ที่ดูแล</div>
            <Form.Item
              name="station_attendant"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <CSelect
                placeholder="เลือกเจ้าหน้าที่"
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
              onClick={() => onClick(false)}
            >
              {t("ยกเลิก")}
            </StyledButton>
          </div>
          <div>
            <StyledButton onClick={() => coordinate.submit()} htmlType="submit">
              {t("ยืนยันการรับเรื่อง")}
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default ModalCoordinate;
