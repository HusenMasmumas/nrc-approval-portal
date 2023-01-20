import { FC } from "react";

const status: {
  [key: number]: { textColor: string; bgColor: string; name: string };
} = {
  1: {
    textColor: "#EB8749",
    bgColor: "#FFFBED",
    name: "รอรับเรื่อง",
  },
  2: {
    textColor: "#0064FF",
    bgColor: "#F5F9FC",
    name: "อยู่ระหว่างการพิจารณา",
  },
  3: {
    textColor: "#28A745",
    bgColor: "#EAF7ED",
    name: "อนุมัติ",
  },
  4: {
    textColor: "#6C757D",
    bgColor: "#E2E6EA",
    name: "ไม่อนุมัติ",
  },
  5: {
    textColor: "#E02020",
    bgColor: "#FFF5F5",
    name: "ขอให้ปรับแก้",
  },
  6: {
    textColor: "#28A745",
    bgColor: "#EAF7ED",
    name: "on-air",
  },
  7: {
    textColor: "#EB8749",
    bgColor: "#FFFBED",
    name: "ปรับแก้ไขแล้ว",
  },
  8: {
    textColor: "#0064FF",
    bgColor: "#F5F9FC",
    name: "รอพิจารณา",
  },
  9: {
    textColor: "#777777",
    bgColor: "#E7E7E7",
    name: "OFFLINE",
  },
};

type Props = {
  keyData: number;
};

const StatusTable: FC<Props> = ({ keyData }) => {
  if (keyData === 9 || keyData === 6) {
    return (
      <div className="flex  ">
        <span
          className="flex items-center py-[3px] px-[10px]   rounded-[30px] "
          style={{ backgroundColor: `${status?.[keyData]?.bgColor}` }}
        >
          <div
            style={{ backgroundColor: `${status?.[keyData]?.textColor}` }}
            className="circle-status "
          />
          <div
            style={{ color: `${status?.[keyData]?.textColor}` }}
            className="text-[12px] pl-[5px] "
          >
            <span>{"on-air".toLocaleUpperCase()}</span>
          </div>
        </span>
      </div>
    );
  } else {
    return (
      <div style={{ color: `${status?.[keyData]?.textColor}` }}>
        <span
          style={{ backgroundColor: `${status?.[keyData]?.bgColor}` }}
          className=" pl-[10px] text-[12px] pr-[10px] rounded-[30px]"
        >
          {status?.[keyData]?.name}
        </span>
      </div>
    );
  }
};

export default StatusTable;
