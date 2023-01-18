import { Input, Button } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";
import tw from "twin.macro";
import { ButtonThemeTypes, InputThemeTypes } from "./interface";

export const StyledInput = styled(Input)<{ thm?: InputThemeTypes }>`
  height: ${({ thm }) => thm?.height || "40px"};
`;

export const StyledInputPassword = styled(Input.Password)<{
  thm?: InputThemeTypes;
}>`
  height: ${({ thm }) => thm?.height || "40px"};
`;

export const StyledButton = styled(Button)<{ thm?: ButtonThemeTypes }>`
  height: ${({ thm }) => thm?.height || "45px"};
  box-shadow: #e02020;
  border-color: #e02020;
  ${tw`text-white bg-[#E02020] w-full`};
  &:hover,
  &:active,
  &:focus {
    color: #ffffff !important;
    border-color: #e02020 !important;
    ${tw`text-white  w-full`}
  }
`;

export const StyledHeader = styled(Header)`
  height: 64px;
`;
