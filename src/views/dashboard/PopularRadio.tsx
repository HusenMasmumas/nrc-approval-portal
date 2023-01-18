import { HeartOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Image } from "antd";
import Radio from "assets/img/dashboard/radio.jpg";

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
              <div
                key={index}
                className="bg-white h-[232px] w-[289] drop-shadow-sm rounded-[5px]"
              >
                <Image
                  className="object-cover"
                  src={Radio}
                  preview={false}
                  height={190}
                />
                <div className="flex p-[10px] items-center text-[#6F7F91]">
                  <div className="text-[14px]">Xco Radio</div>
                  <div className="ml-auto cursor-pointer">
                    <HeartOutlined />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularRadio;
