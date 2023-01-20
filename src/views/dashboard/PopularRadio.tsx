import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Radio from "assets/img/dashboard/radio.jpg";
import CardRadio from "components/card_radio/CardRadio";

const PopularRadio = () => {
  return (
    <div className="pt-[18px]">
      <div className="flex flex-[row wrap]">
        <div>สถานีวิทยุ ยอดนิยม</div>
        <div className="ml-auto flex">
          <div className="text-[#E02020] pr-[20px]">ดูทั้งหมด</div>
          <div className="pr-[30px]">
            <LeftOutlined className="text-[#6F7F91]" />
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-6 gap-3 mt-[30px] ">
          {new Array(6).fill("").map((_, index) => {
            return (
              <div key={index}>
                <CardRadio image={Radio} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularRadio;
