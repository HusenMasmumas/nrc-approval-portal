import {
  CalendarOutlined,
  CaretRightOutlined,
  CheckOutlined,
  CommentOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Collapse } from "antd";
import ViewWaveSurfer from "assets/wavesurfer/Wavesurfer";
import CImage from "components/image/Image";
import StatusTable from "components/status/Status";
import {
  StyledDivBorder,
  StyledLine,
  StyledInput,
  StyledAvatarNone,
  StyledButton,
} from "components/styled/Styled";
import dayjs from "dayjs";
import { ReactComponent as Plus } from "assets/icon/plus.svg";
import { useMainWaveSurfer } from "providers/wavesurfer";
import { formatTime } from "tools/util";

const { Panel } = Collapse;

const PlayList = () => {
  const { playPosition } = useMainWaveSurfer();
  return (
    <div className="col-span-8  ">
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
                  <CheckOutlined />
                </div>
                <div className="step-name">อยู่ระหว่างการพิจารณา</div>
              </div>
              <div className="stepper-item completed">
                <div className="step-counter">
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

      <div className="mt-[20px] flex items-center">
        <div>
          <CImage height={27} src="" />
        </div>
        <div>
          Sport 9:00-10:00 <span className="text-[#6C757D]">(60 นาที)</span>
        </div>
      </div>

      <Collapse
        className="mt-[5px] "
        defaultActiveKey={["1"]}
        collapsible="header"
      >
        <Panel
          header={
            <div className="flex items-center">
              <div className="pr-[10px]">30:00 นาที</div>
              <CImage height={43} src="" />

              <div className="pl-[10px]">FFNC_0001</div>
            </div>
          }
          extra={
            <div className="flex items-center">
              <div>
                <CaretRightOutlined />
              </div>
              <div className="pl-[10px]">3.15 MB</div>
              <div className="pl-[70px] text-[#28A745]">
                <FileDoneOutlined />
              </div>
            </div>
          }
          key="1"
        >
          <div>
            <div className="p-[16px]">
              <div className="bg-[#ffffff] rounded-[5px] p-[10px]">
                <div>รายการที่ต้องแก้ไข</div>
                <div className="grid grid-cols-[1fr_5.5fr_2fr_2fr_2fr_0.5fr] gap-1 mt-[10px]">
                  <div>นาที</div>
                  <div>เนื้อหา</div>
                  <div>วันที่</div>
                  <div>วันที่อัพเดต</div>
                  <div>การดำเนินการ</div>
                  <div></div>
                  <div className="col-span-full">
                    <StyledLine />
                  </div>
                </div>

                <div className="grid grid-cols-[1fr_5.5fr_2fr_2fr_2fr_0.5fr] gap-1  mt-[10px]">
                  <div>01:20</div>
                  <div>เปลี่ยนเนื้อหา</div>
                  <div>08/05/65 10:00</div>
                  <div>-</div>
                  <div>การดำเนินการ</div>
                  <div className=" text-[#E02020]"> ลบ</div>
                </div>
                <div className="grid grid-cols-[2fr_6fr_6fr] gap-1  mt-[10px]">
                  <div>
                    <StyledInput value={formatTime(playPosition)} />
                  </div>
                  <div>
                    <StyledInput />
                  </div>
                  <div className="h-full flex justify-center items-center w-[40px] bg-white border-solid border-[1px] border-[#647486] rounded-[5px]">
                    <Plus className="icon-red" />
                  </div>
                </div>
              </div>
              <div className="mt-[10px] flex">
                <div className="p-[10px] rounded-[5px] border-solid border-[1px] border-[#647486] flex">
                  <div className="pr-[10px]">
                    <CommentOutlined />
                  </div>
                  <div>0 Comment</div>
                </div>
              </div>
              <div className="bg-white rounded-[5px] p-[10px] mt-[15px]">
                <div>0 Comment</div>
                <div className="flex  items-center">
                  <div className="pr-[10px]">
                    <StyledAvatarNone
                      size={50}
                      icon={<CImage height={50} src="" />}
                    />
                  </div>

                  <StyledInput placeholder="เขียนข้อความ" />

                  <div className="pl-[10px]">
                    <StyledButton
                      thm={{
                        height: "40px",
                        bg: "#FFFFFF",
                        border: "#647486",
                        color: "#141414",
                      }}
                    >
                      ส่ง
                    </StyledButton>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[5px] p-[10px] mt-[15px]">
                <div>ประวัติการอัปโหลด</div>

                <div className="grid grid-cols-[1fr_5fr_3fr] gap-3">
                  <CImage height={56.4} src="" />
                  <div className="flex flex-col">
                    <div>ประวัติการอัปโหลด</div>
                    <div className="grid grid-cols-[2fr_5fr] text-[#868E96]">
                      <div>3.15 MB</div>
                      <div>30 นาที</div>
                    </div>
                  </div>
                  <div className="text-[#868E96]">08/05/65 10:00</div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
      <div className="bg-[#F2F4F6] px-[20px] py-[10px]  border-x-[1px] border-b-[1px] border-[#E7E7E7]">
        <div className="flex items-center">
          <div className="pr-[10px]">30:00 นาที</div>
          <CImage height={43} src="" />

          <div className="pl-[10px]">Ads</div>

          <div className=" ml-auto">
            <CaretRightOutlined />
          </div>
          <div className="pl-[10px]">3.15 MB</div>
          <div className="pl-[70px] text-[#28A745]">
            <FileDoneOutlined />
          </div>
        </div>
      </div>
      <div className="flex items-center my-[10px]">
        <CImage height={27} src="" />
        <div className="pl-[5px] text-[#343A40]">News 10:00-11:00</div>
        <div className="pl-[5px] text-[#6C757D]">(60 นาที)</div>
      </div>

      <div className="bg-[#F2F4F6] px-[20px] py-[10px] border-[1px]  border-[#E7E7E7]">
        <div className="flex items-center">
          <div className="pr-[10px]">30:00 นาที</div>
          <CImage height={43} src="" />

          <div className="pl-[10px]">Ads</div>

          <div className="ml-auto">
            <CaretRightOutlined />
          </div>
          <div className="pl-[10px]">3.15 MB</div>
          <div className="pl-[70px] text-[#28A745]">
            <FileDoneOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayList;
