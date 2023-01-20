import MoImage from "components/image/Image";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Clock from "assets/icon/clock.svg";
import View from "assets/icon/view.svg";
import Edit from "assets/icon/clock.svg";
import Delete from "assets/icon/view.svg";
import EllipsisOutlined from "assets/icon/ellipsis_outlined.svg";

import { ImageProps } from "antd";

const icon: {
  [key: string]: {
    img: string;
  };
} = {
  view: { img: View },
  delete: { img: Delete },
  edit: { img: Edit },
  clock: { img: Clock },
  menu: { img: EllipsisOutlined },
};

const StyledDivCursor = styled.div`
  ${tw`ml-[10px] cursor-pointer`}
`;
const StyledDiv = styled.div`
  ${tw`ml-[10px]`}
`;
interface Props extends ImageProps {
  keyData: string;
  onClick?: () => void;
}

const MoIcon: FC<Props> = ({ keyData, onClick, ...props }) => {
  if (!!onClick)
    return (
      <StyledDivCursor onClick={onClick}>
        <MoImage {...props} src={icon?.[keyData]?.img} preview={false} />
      </StyledDivCursor>
    );
  return (
    <StyledDiv onClick={onClick}>
      <MoImage {...props} src={icon?.[keyData]?.img} preview={false} />
    </StyledDiv>
  );
};

export default MoIcon;
