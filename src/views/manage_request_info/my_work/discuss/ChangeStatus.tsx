import { Form } from "antd";
import CSelect from "components/select/Selector";
import { StyledButton, StyledDatePicker } from "components/styled/Styled";
import { useTranslation } from "react-i18next";
import { dayjs } from "tools/timezone";

const ChangeStatus = () => {
  const { t } = useTranslation();
  const onFinish = (value: any) => {
    console.log({ ...value, date: dayjs(value?.date).format("DD/MM/BBBB") });
  };
  return (
    <div className="col-span-4 bg-[#141414] rounded-[5px] border-[1px] border-[#DEE2E7] p-[15px]">
      <div className="flex ">
        <div className="text-[#E02020]">*</div>
        <div className="text-[#FFFFFF]">ผลการพิจารณา</div>
        <div className="ml-auto"></div>
      </div>
      <div className="my-[20px] border-b-[1px] border-[#3F3B3F]" />
      <div className="text-[#6F7F91] mb-[20px]">
        เลือกผลการพิจารณา เพื่อเปลี่ยนสถานะ การดำเนินงาน
      </div>
      <Form onFinish={onFinish}>
        <Form.Item name="status" rules={[{ required: true }]}>
          <CSelect
            placeholder="สถานะ"
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
        <div className="text-[#FFFFFF]">ชื่อเจ้าหน้าที่</div>

        <Form.Item
          name="officer_name"
          rules={[
            {
              required: true,
              message: `${t("pleaseSelectAnOfficer")}`,
            },
          ]}
        >
          <CSelect
            placeholder="ชื่อเจ้าหน้าที่"
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
        <div className="text-[#FFFFFF]">วันที่</div>

        <Form.Item
          name="date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <StyledDatePicker format="DD/MM/BBBB" />
        </Form.Item>

        <StyledButton
          className="px-[50px] "
          thm={{
            height: "40px",
            width: "auto",
          }}
          htmlType="submit"
        >
          บันทึก
        </StyledButton>
      </Form>
    </div>
  );
};

export default ChangeStatus;
