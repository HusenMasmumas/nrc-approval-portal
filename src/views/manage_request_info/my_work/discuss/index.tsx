import ViewWaveSurfer from "assets/wavesurfer/Wavesurfer";
import CImage from "components/image/Image";
import Back from "assets/icon/back.svg";
import { StyledButton, StyledDivBorder } from "components/styled/Styled";
import dayjs from "dayjs";
import { CalendarOutlined, CheckOutlined } from "@ant-design/icons";
import StatusTable from "components/status/Status";

const Discuss = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex items-center cursor-pointer">
          <CImage className="pr-[5px]" src={Back} />

          <div>กลับ</div>
        </div>

        <div className=" ml-[auto] flex">
          <div className="pr-[10px]">
            <StyledButton
              thm={{
                bg: "#ffffff",
                border: "#000000",
                color: "#141414",
              }}
            >
              ยกเลิก
            </StyledButton>
          </div>
          <div>
            <StyledButton
              thm={{
                bg: "#ffffff",
                border: "#000000",
                color: "#141414",
              }}
            >
              ดูตัวอย่าง
            </StyledButton>
          </div>
        </div>
      </div>

      <div className="mt-[20px] grid grid-cols-12 gap-4">
        <div className="col-span-8 ">
          <div className="rounded-[5px] bg-[#ffffff] border-[1px] border-[#DEE2E7]">
            <div className="bg-[#E02020] h-[10px] rounded-t-[5px]" />
            <div className="p-[20px]">
              <div className="flex">
                <CImage src="" height={95.25} />

                <div>
                  <div className="text-[20px]">Xco Radio</div>
                  <div>N161165008</div>
                  <div className="flex">
                    <StyledDivBorder className="mr-[10px] flex items-center text-[12px] px-[4px] py-[4px]">
                      <div className="pr-[10px]">
                        <CalendarOutlined />
                      </div>
                      <div>{dayjs().format("DD/MM/BB")}</div>
                    </StyledDivBorder>
                    <StyledDivBorder className="mr-[10px] text-[12px] px-[4px] py-[4px]">
                      09:00-11:00
                    </StyledDivBorder>
                  </div>
                </div>
                <div className="ml-[auto]">
                  <StatusTable keyData={7} />
                </div>
              </div>
              <div>
                <div className="stepper-wrapper">
                  <div className="stepper-item completed">
                    <div className="step-counter">
                      <CheckOutlined />
                    </div>
                    <div className="step-name">รับเรื่อง</div>
                  </div>
                  <div className="stepper-item completed">
                    <div className="step-counter">
                      {" "}
                      <CheckOutlined />
                    </div>
                    <div className="step-name">อยู่ระหว่างการพิจารณา</div>
                  </div>
                  <div className="stepper-item completed">
                    <div className="step-counter">
                      {" "}
                      <CheckOutlined />
                    </div>
                    <div className="step-name">ขอไห้แก้ไข</div>
                  </div>

                  <div className="stepper-item active">
                    <div className="step-counter">
                      <div className="rounded-full bg-[#ffffff] w-[20px] h-[20px] border-solid border-2 border-[#B0B6BA]" />
                    </div>
                    <div className="step-name">ส่งผลการปรับแก้</div>
                  </div>
                  <div className="stepper-item">
                    <div className="step-counter">
                      <div className="rounded-full bg-[#ffffff] w-[20px] h-[20px] border-solid border-2 border-[#B0B6BA]" />
                    </div>
                    <div className="step-name">อนุมัติ / ไม่อนุมัติ</div>
                  </div>
                </div>
              </div>
              <ViewWaveSurfer />
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-[#141414] rounded-[5px] border-[1px] border-[#DEE2E7]"></div>
      </div>
    </div>
  );
};

export default Discuss;
