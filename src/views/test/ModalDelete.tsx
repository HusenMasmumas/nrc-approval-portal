import { ExclamationCircleFilled } from "@ant-design/icons";
import { useIsMutating } from "@tanstack/react-query";
import CModal from "components/modal/Modal";
import { StyledButton } from "components/styled/Styled";
import { FC } from "react";

type Props = {
  isModalOpen: boolean;
  onManageModal: (e: boolean) => void;
  deleteData: () => void;
};

const ModalDelete: FC<Props> = ({ isModalOpen, onManageModal, deleteData }) => {
  const isDeletePrefix = useIsMutating(["delete-prefix"]);
  return (
    <CModal
      open={isModalOpen}
      title={
        <div className=" flex items-center">
          <div className="pr-[10px]">
            <ExclamationCircleFilled className="text-[#e9ab54]" />
          </div>
          <div>ลบข้อมูล</div>
        </div>
      }
      onOk={() => onManageModal(false)}
      onCancel={() => onManageModal(false)}
      body={
        <>
          <div>คุณแน่ใจที่จะลบข้อมูลจริงหรือไม่</div>
        </>
      }
      footerRender={
        <>
          <div>
            <StyledButton
              thm={{
                bg: "#ffffff",
                color: "#141414",
                border: "#E0E0E0",
              }}
              onClick={() => onManageModal(false)}
            >
              ยกเลิก
            </StyledButton>
          </div>
          <div>
            <StyledButton
              loading={!!isDeletePrefix ? true : false}
              onClick={() => {
                deleteData();
                // onManageModal(false);
              }}
            >
              ตกลง
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default ModalDelete;
