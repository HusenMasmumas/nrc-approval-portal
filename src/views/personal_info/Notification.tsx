import { Form, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { StyledButton, StyledLine } from "components/styled/Styled";
import React, { useEffect } from "react";
const data = [
  {
    name: "งานที่ได้รับมอบหมาย",
    key: 1,
    value: false,
  },
  {
    name: "แสดงสถานะที่เปลี่ยนไปในขั้นตอนการพิจารณา",
    key: 2,
    value: false,
  },
  {
    name: "มีรายการที่ต้องแก้ไขปรับปรุง",
    key: 3,
    value: false,
  },
  {
    name: "มีการดำเนินการลบไฟล์",
    key: 4,
    value: false,
  },
];

const Notification = () => {
  const [form] = useForm();

  useEffect(() => {
    form.setFieldsValue({ notification: data });
    // eslint-disable-next-line
  }, []);

  return (
    <Form form={form}>
      <div>
        <div className="text-[20px]">แจ้งเตือน</div>
        <div className="mt-[15px] flex items-center">
          <div>กิจกรรม</div>
          <div className="ml-auto flex items-center">
            <div className="pr-[15px]">ใช่</div>

            <div>ไม่ใช่</div>
          </div>
        </div>
        <StyledLine className="mt-[15px] mb-[15px]" />

        <Form.Item name="notification">
          <NotificationList />
        </Form.Item>
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
  );
};

const NotificationList = ({ value, onChange }: any) => {
  const setData = (data: boolean, key: number) => {
    const dataChange = value?.map((item: any) => {
      if (key === item?.key) {
        return {
          ...item,
          value: data,
        };
      } else {
        return item;
      }
    });

    onChange(dataChange);
  };
  return (
    <>
      {value?.map((item: any, i: number) => {
        return (
          <React.Fragment key={i}>
            <div className=" flex items-center">
              <div>{item?.name}</div>
              <div className="ml-auto flex items-center">
                <Radio.Group
                  value={item?.value}
                  onChange={(e) => setData(e.target.value, item?.key)}
                >
                  <Radio className="mr-[15px]" value={true} />

                  <Radio value={false} />
                </Radio.Group>
              </div>
            </div>
            <StyledLine className="mt-[15px] mb-[15px]" />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default Notification;
