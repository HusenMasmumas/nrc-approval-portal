import { Input, Button, Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import tw from "twin.macro";
import { ButtonThemeTypes, InputThemeTypes } from "./interface";

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

export const StyledInputPassword = styled(Input.Password)<{
  thm?: InputThemeTypes;
}>`
  height: ${({ thm }) => thm?.height || "40px"};
`;

export const StyledButton = styled(Button)<{ thm?: ButtonThemeTypes }>`
  height: ${({ thm }) => thm?.height || "45px"};
  width: ${({ thm }) => thm?.width || "100%"};
  box-shadow: #e02020;
  border-color: ${({ thm }) => thm?.border || "#e02020"};
  width: ${({ thm }) => thm?.width || "100%"};
  background-color: ${({ thm }) => thm?.bg || "#E02020"};
  color: ${({ thm }) => thm?.color || "#ffffff"};
  ${tw` w-full`};
  &.ant-btn {
    font-family: "NotoSansThai", "NotoSansThai-Bold", "NotoSansThaiMedium";
  }
  &:hover,
  &:active,
  &:focus {
    color: ${({ thm }) => thm?.color || "#ffffff"} !important;
    border-color: ${({ thm }) => thm?.border || "#e02020"} !important;
    ${tw`text-white  w-full`};
  }
`;

export const StyledHeader = styled(Header)`
  height: 64px;
`;

export const StyledAvatar = styled(Avatar)`
  &.ant-avatar {
    ${tw`border-0`}
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
