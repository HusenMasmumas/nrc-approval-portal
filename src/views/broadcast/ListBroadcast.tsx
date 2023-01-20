import Radio from "assets/img/dashboard/radio.jpg";
import StatusTable from "components/status/Status";
import MoImage from "components/image/Image";
import { dayjs } from "tools/timezone";
import { EllipsisOutlined } from "@ant-design/icons";
import Heart from "assets/icon/heart.svg";
import Play from "assets/icon/play.svg";
import Comment from "assets/icon/comment.svg";
import Share from "assets/icon/share.svg";
import MoPagination from "components/pagination/Pagination";
import { StyledDivBorder } from "components/styled/Styled";
import MoIcon from "components/icon/Icon";

const obj = [
  {
    icon: Heart,
    value: 1,
    key: 1,
  },
  {
    icon: Play,
    value: 0,
    key: 2,
  },
  {
    icon: Share,
    value: 0,
    key: 3,
  },
  {
    icon: Comment,
    value: 0,
    key: 4,
  },
];

const ListBroadcast = () => {
  return (
    <div className="bg-white w-full p-[15px] ">
      {new Array(10).fill("").map((_, i) => {
        return (
          <div key={i}>
            <div className=" h-[141.21px] flex ">
              <div className=" pr-[10px] font-NotoSansThaiBold">
                <MoImage src={Radio} width={124} height={121.82} />
              </div>
              <div className=" flex flex-col w-full">
                <div className="flex  items-center">
                  <div className="pr-[15px] text-[30px] font-bold ">
                    Smooth Radio
                  </div>
                  <StatusTable keyData={6} />
                  <div className=" ml-auto flex justify-end">
                    <StyledDivBorder className="mr-[10px]">
                      {dayjs().format("DD/MM/BB")}
                    </StyledDivBorder>

                    <StyledDivBorder className="mr-[10px]">
                      09:00-11:00
                    </StyledDivBorder>

                    <StyledDivBorder>
                      <MoIcon
                        keyData="menu"
                        classDiv={{
                          className: " justify-center flex items-center ",
                        }}
                      />
                    </StyledDivBorder>
                  </div>
                </div>
                <div className=" flex items-center text-[12px] text-[#6F7F91] mt-[15px]">
                  <div className="mr-[10px]">N161165008</div>
                  <div className="mr-[10px]">
                    Last Online Check : 10/05/65 11:00
                  </div>
                </div>
                <div className=" flex items-center text-[12px] text-[#6F7F91] w-[80%]  mt-[10px]">
                  <div className="grid grid-cols-4 gap-[50px] items-center">
                    {obj.map((item, i) => {
                      return (
                        <div className="flex" key={i}>
                          <div className="mr-[5px] ">
                            <MoImage src={item?.icon} height={15} />
                          </div>
                          <div>{item?.value}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] border-[#D9DEE4] flex justify-center ml-[15px] mr-[15px] mb-[10px]" />
          </div>
        );
      })}
      <div className="flex justify-end mt-[20px]">
        <MoPagination />
      </div>
    </div>
  );
};

export default ListBroadcast;
