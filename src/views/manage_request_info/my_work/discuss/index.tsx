import CImage from "components/image/Image";
import Back from "assets/icon/back.svg";
import { StyledButton } from "components/styled/Styled";
import PlayList from "./PlayList";
import ChangeStatus from "./ChangeStatus";
import MainWaveSurferProvider from "providers/wavesurfer";
import { useTranslation } from "react-i18next";

const Discuss = () => {
  const { t } = useTranslation();
  return (
    <MainWaveSurferProvider value={{}}>
      <div>
        <div className="flex items-center">
          <div className="flex items-center cursor-pointer">
            <CImage className="pr-[5px]" src={Back} />

            <div>{t("back")}</div>
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

        <div className="mt-[20px]  grid grid-cols-12 gap-4">
          <PlayList />
          <ChangeStatus />
        </div>
      </div>
    </MainWaveSurferProvider>
  );
};

export default Discuss;
