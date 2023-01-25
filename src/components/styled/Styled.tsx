import { Input, Button, Avatar, Modal, Select } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import tw from "twin.macro";
import {
  ButtonThemeTypes,
  InputThemeTypes,
  SelectThemeTypes,
  StatusThemeTypes,
} from "./interface";

export const StyledInput = styled(Input)<{ thm?: InputThemeTypes }>`
  height: ${({ thm }) => thm?.height || "40px"};
  width: ${({ thm }) => thm?.width || "100%"};
  background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  .ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
  }
  &.ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
  }
`;

export const StyledInputNoBorder = styled(Input)<{ thm?: InputThemeTypes }>`
  height: ${({ thm }) => thm?.height || "40px"};
  width: ${({ thm }) => thm?.width || "100%"};
  background-color: ${({ thm }) => thm?.backgroundColor || "white"};

  &.ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
    border: unset !important;
    color: ${({ thm }) => thm?.color || "#525F7F"} !important;
  }
  &.ant-input:focus,
  .ant-input:focus-visited,
  .ant-input:active {
    box-shadow: unset !important;
    border: unset !important;
  }
`;

export const StyledInputPassword = styled(Input.Password)<{
  thm?: InputThemeTypes;
}>`
  height: ${({ thm }) => thm?.height || "40px"};
  width: ${({ thm }) => thm?.width || "100%"};
  background-color: ${({ thm }) => thm?.backgroundColor || "white"};
  .ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
  }
  &.ant-input {
    background-color: ${({ thm }) => thm?.backgroundColor || "white"};
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
  }
`;

export const StyledButton = styled(Button)<{ thm?: ButtonThemeTypes }>`
  height: ${({ thm }) => thm?.height || "45px"};
  width: ${({ thm }) => thm?.width || "100%"};
  box-shadow: #e02020;
  border-color: ${({ thm }) => thm?.border || "#e02020"};
  background-color: ${({ thm }) => thm?.bg || "#E02020"};
  color: ${({ thm }) => thm?.color || "#ffffff"};
  &.ant-btn {
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
  }
  &:hover,
  &:active,
  &:focus {
    color: ${({ thm }) => thm?.color || "#ffffff"} !important;
    border-color: ${({ thm }) => thm?.border || "#e02020"} !important;
    ${tw`text-white `};
  }
`;

export const StyledHeader = styled(Header)`
  height: 64px;
`;

export const StyledAvatarNone = styled(Avatar)`
  &.ant-avatar {
    ${tw`border-0 `}
  }
`;
export const StyledAvatar = styled(Avatar)`
  &.ant-avatar {
    ${tw`border-4  border-[#F0F2F5] drop-shadow-2xl`}
  }
`;

export const StyledDivBorder = styled.div`
  ${tw` border-[1px] border-[#D9DEE4] px-[10px] py-[6px] rounded-[5px] flex justify-center items-center  `};
`;

export const StyledSpanBorder = styled.span`
  ${tw` border-[1px] border-[#D9DEE4] px-[10px] py-[6px]  rounded-[5px]`};
`;

export const StyledDivPaddingLeft = styled.div`
  ${tw`ml-[10px]`}
`;

export const StyledStatus = styled.div<{ thm?: StatusThemeTypes }>`
  border-radius: 50%;
  width: ${({ thm }) => thm?.width || "7px"};
  height: ${({ thm }) => thm?.width || "7px"};
  background-color: ${({ thm }) => thm?.bg || "#BC1B1C"};
  border: 1px solid ${({ thm }) => thm?.border || "#BC1B1C"};
`;

export const StyledLine = styled.div`
  ${tw`border-b-[1px] border-[#D9DEE4]`};
`;

export const StyledModal = styled(Modal)`
  &.ant-modal .ant-modal-content {
    padding: unset !important;
  }
  .ant-modal-header {
    margin-bottom: 0px !important;
  }
  .ant-modal-close {
    top: 28px !important;
    color: #000000;
  }
  &.manage-modal .ant-modal-body {
    height: calc(100% - 70px);
    padding: 0px;
  }

  &.manage-modal .scroll {
    height: 40vh;
    overflow-y: auto;
    overflow-x: clip;
  }

  &.manage-modal .footer {
    height: 85px;
    position: relative;
  }
`;

export const StyledSelect = styled(Select)<{
  thm?: SelectThemeTypes;
}>`
  .ant-select-selector {
    height: ${({ thm }) => thm?.height || "40px"} !important;
  }

  &.ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: ${({ thm }) => thm?.height || "40px"};
  }

  .ant-select-selection-search {
    display: flex !important;
    align-items: center !important;
  }
  .ant-select-selection-placeholder {
    display: flex !important;
    align-items: center !important;
  }
`;
