import CImage from "components/image/Image";
import { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Clock from "assets/icon/clock.svg";
import View from "assets/icon/view.svg";
import Edit from "assets/icon/edit.svg";
import Delete from "assets/icon/delete.svg";
import Plus from "assets/icon/plus.svg";
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
  plus: {
    img: Plus,
  },
};

const StyledDivCursor = styled.div`
  ${tw`cursor-pointer`}
`;
const StyledDiv = styled.div``;
interface IClassDiv {
  className: string;
}
interface Props extends ImageProps {
  keyData: string;
  onClick?: () => void;
  classDiv?: IClassDiv;
}

const MoIcon: FC<Props> = ({
  keyData,
  classDiv = { className: "justify-center flex items-center " },
  onClick,
  ...props
}) => {
  if (!!onClick)
    return (
      <StyledDivCursor className={classDiv?.className} onClick={onClick}>
        <CImage {...props} src={icon?.[keyData]?.img} preview={false} />
      </StyledDivCursor>
    );
  return (
    <StyledDiv className={classDiv?.className} onClick={onClick}>
      <CImage {...props} src={icon?.[keyData]?.img} preview={false} />
    </StyledDiv>
  );
};

export default MoIcon;
