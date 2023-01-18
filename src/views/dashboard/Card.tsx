import { Card } from "antd";
const card = [
  {
    key: 0,
    name: "จำนวนผู้ใช้งาน",
  },
  {
    key: 1,
    name: "สถานีวิทยุ",
  },
  {
    key: 2,
    name: "จำนวนคำขออนุมัติ",
  },
  {
    key: 3,
    name: "ข้อมูลคำขอออกอากาศ",
  },
];

const CardDashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {card?.map((item, index) => {
        return (
          <Card key={index}>
            <div>{item.name}</div>
            <div
              style={{ fontFamily: "NotoSansThaiMedium" }}
              className=" text-[20px]"
            >
              1,200
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default CardDashboard;
