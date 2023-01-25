import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import CImage from "components/image/Image";
import CModal from "components/modal/Modal";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import addImage from "assets/icon/manage_station_info/addImage.svg";
import TextArea from "antd/es/input/TextArea";

type Props = {
  isModalOpen: boolean;
  onCloseModal: (e: boolean) => void;
};

const FormAddStationInfoCategory: FC<Props> = ({
  isModalOpen,
  onCloseModal,
}) => {
  const { t } = useTranslation();
  const [addStationCategory] = useForm();

  const onFinish = (e: any) => {
    onCloseModal(false);
  };

  return (
    <CModal
      open={isModalOpen}
      title="เพิ่มหมวดหมู่"
      onOk={() => onCloseModal(false)}
      onCancel={() => onCloseModal(false)}
      body={
        <>
          <Form name="addUser" onFinish={onFinish} form={addStationCategory}>
            <div className=" grid grid-cols-12 gap-4">
              <div className="col-span-5">
                <div className="text-[#23272B] pb-[10px]">รูปภาพหมวดหมู่</div>

                <Form.Item name="image">
                  <div className="h-[234px] w-full border-dashed  rounded-[5px] border-2 border-[#647486] flex flex-col justify-center items-center cursor-pointer">
                    <div>
                      <CImage src={addImage} height={50} />
                    </div>
                    <div>เลือกรูปภาพ</div>
                  </div>
                </Form.Item>
              </div>

              <div className="col-span-7">
                <div className="text-[#23272B] pb-[10px]">ชื่อหมวดหมู่</div>

                <div>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <StyledInput placeholder="ชื่อหมวดหมู่" />
                  </Form.Item>
                </div>

                <div className="text-[#23272B] pb-[10px]">คำอธิบาย</div>

                <div>
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
                      style={{ height: 120, marginBottom: 24 }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
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
              onClick={() => onCloseModal(false)}
            >
              {t("ยกเลิก")}
            </StyledButton>
          </div>
          <div>
            <StyledButton
              onClick={() => addStationCategory.submit()}
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

export default FormAddStationInfoCategory;
