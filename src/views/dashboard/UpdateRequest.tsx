import { DatePicker, Image } from "antd";
import { Fragment } from "react";
import Wait from "assets/icon/dashboard/wait.svg";
import Adjust from "assets/icon/dashboard/adjust.svg";
import Between from "assets/icon/dashboard/between.svg";
import Approve from "assets/icon/dashboard/approve.svg";
import Disapproved from "assets/icon/dashboard/disapproved.svg";
import { ArrowRightOutlined } from "@ant-design/icons";

const UpdateRequest = () => {
  const request = [
    {
      name: "รอรับเรื่อง",
      icon: Wait,
      key: "1",
    },
    {
      name: "อยู่ระหว่างการพิจารณา",
      icon: Between,
      key: "2",
    },
    {
      name: "ขอให้ปรับแก้",
      icon: Adjust,
      key: "3",
    },
    {
      name: "อนุมัติ",
      icon: Approve,
      key: "4",
    },
    {
      name: "ไม่อนุมัติ",
      icon: Disapproved,
      key: "5",
    },
  ];
  return (
    <div className="text-[15px]">
      <div className="flex flex-[row wrap] items-center">
        <div>อัพเดตคำขอ</div>
        <div className="ml-[auto]">
          <DatePicker format="DD/MM/BB" />
        </div>
      </div>

      <div className="flex flex-[row wrap] mt-[20px]  items-center text-[#6C757D]">
        <div>สถานะ</div>
        <div className="ml-[auto]">จำนวน</div>
      </div>

      <div className="border-b-[1px] border-[#D9DEE4] mt-[20px] mb-[10px]" />

      {request?.map((item, i) => {
        return (
          <Fragment key={i}>
            <div className="flex items-center text-[#6C757D]">
              <div className=" mr-[10px]">
                <Image src={item?.icon} preview={false} width={25} />
              </div>
              <div>{item?.name}</div>
              <div className="ml-[auto]">30</div>
            </div>

            <div className="border-b-[1px] border-[#D9DEE4] mt-[20px] mb-[20px]" />
          </Fragment>
        );
      })}

      <div className="flex justify-end text-[#E02020] items-center ">
        <div className="pr-[10px]">รายละเอียดเพิ่มเติม</div>
        <div>
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default UpdateRequest;
