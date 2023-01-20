import React from "react";
import { Image } from "antd";
import Radio from "assets/img/dashboard/radio.jpg";

const ListBroadcast = () => {
  return (
    <div className="bg-white w-full p-[15px]">
      <div className=" h-[141.21px] flex ">
        <div className=" pr-[10px] font-NotoSansThaiBold">
          <Image
            className="object-cover"
            src={Radio}
            preview={false}
            width={124}
            height={121.82}
          />
        </div>
        <div>
          <div className="flex items-center ">
            <div className="pr-[15px] text-[25px]"> Smooth Radio</div>

            <div className="flex items-center p-[3px] bg-[#EAF7ED] rounded-[30px]">
              <div className="circle-status bg-[#28A745]" />
              <div className="text-[10px] pl-[5px] text-[#28A745]">
                <span>{"on-air".toLocaleUpperCase()}</span>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <div className="border-b-[1px] border-[#D9DEE4] flex justify-center ml-[15px] mr-[15px]" />

      <div className="h-[141.21px]">aaa</div>
    </div>
  );
};

export default ListBroadcast;
