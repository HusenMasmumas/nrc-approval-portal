import { Form, Radio } from "antd";
import { useForm } from "antd/lib/form/Form";
import CModal from "components/modal/Modal";
import {
  StyledButton,
  StyledInput,
  StyledRadio,
} from "components/styled/Styled";
import { FC } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  isModalOpen: boolean;
  onManageModal: (e: boolean) => void;
};

const FormAddStaff: FC<Props> = ({ isModalOpen, onManageModal }) => {
  const { t } = useTranslation();
  const [formAddStaff] = useForm();

  const onFinish = () => {};
  return (
    <CModal
      open={isModalOpen}
      thm={{ height: "60vh" }}
      title="เพิ่มเจ้าหน้าที่ในระบบ"
      onOk={() => onManageModal(false)}
      onCancel={() => onManageModal(false)}
      body={
        <>
          <Form name="addUser" onFinish={onFinish} form={formAddStaff}>
            <div className="text-[#23272B]">อีเมล</div>
            <div className="text-[#6C757D]">โปรดใส่อีเมลเจ้าหน้าที่</div>
            <div>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <StyledInput placeholder="อีเมล" />
              </Form.Item>
            </div>

            <Form.Item
              name="role"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <StyledRadio>
                <Radio value={1}>Super Admin</Radio>

                <div className="text-[#6C757D] pt-[10px]">
                  สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ได้ทุกประเภท
                  และสามารถมองเห็นและดำเนินการกับรายการคำขอของทุกสถานีได้ทั้งหมด
                </div>

                <Radio value={2}>Administrator</Radio>

                <div className="text-[#6C757D]  py-[10px]">
                  สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ทุกประเภทยกว้น Super Administrator
                  และสามารถมองเห็นและดำเนินการกับรายการคำขอของสถานีได้ทั้งหมด
                </div>

                <Radio value={3}>Stream Manager</Radio>

                <div className="text-[#6C757D]  py-[10px]">
                  สามารถเพิ่ม ลบ แก้ไขผู้ใช้ประเภท Officer
                  สามารถมองเห็นและดำเนินการกับรายการคำขอออกอากาศเฉพาะที่ผูกกับตัวเองหรือทีม
                </div>

                <Radio value={4}>Station Manager</Radio>

                <div className="text-[#6C757D]  py-[10px]">
                  สามารถเพิ่ม ลบ แก้ไขผู้ใช้ประเภท Officer
                  สามารถมองเห็นและดำเนินการกับรายการคำขอของสถานีที่ผูกกับตัวเองหรือทีม
                </div>

                <Radio value={5}>Officer</Radio>

                <div className="text-[#6C757D]  py-[10px]">
                  สามารถเพิ่ม ลบ แก้ไขผู้ใช้ประเภท Officer
                  สามารถมองเห็นและดำเนินการกับรายการคำขอของสถานีที่ผูกกับตัวเองหรือทีม
                </div>
              </StyledRadio>
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
              onClick={() => formAddStaff.submit()}
              htmlType="submit"
            >
              {t("เพิ่มเจ้าหน้าที่")}
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default FormAddStaff;
