import { ModalProps } from "antd";
import { ModalThemeTypes } from "components/styled/interface";
import { StyledLine, StyledModal } from "components/styled/Styled";
import React, { FC } from "react";

interface Props extends ModalProps {
  body: JSX.Element;
  footerRender: JSX.Element;
  thm?: ModalThemeTypes;
}

const CModal: FC<Props> = ({ body, footerRender, thm, ...props }) => {
  return (
    <StyledModal
      thm={{ ...thm }}
      className="manage-modal"
      {...props}
      title={
        <React.Fragment>
          <div className="grid grid-cols-12 h-[70px] items-center px-[20px]">
            <div className="col-span-10">
              <b>{props?.title}</b>
            </div>
            <div className="col-span-2"></div>
          </div>
        </React.Fragment>
      }
      centered
      footer={null}
    >
      <div className="scroll  bg-[#F7F7F8]">
        <StyledLine />
        <div className="px-[30px] pt-[20px]">{body}</div>
      </div>
      <StyledLine />

      <div className="flex justify-end items-center footer px-[20px]">
        <div className=" grid grid-cols-2 gap-4">{footerRender}</div>
      </div>
    </StyledModal>
  );
};

export default CModal;
