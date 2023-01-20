import { Image, ImageProps } from "antd";
import { FC } from "react";
import NoImage from "assets/img/no_image.jpg";
interface Props extends ImageProps {}
const MoImage: FC<Props> = ({ height, className, ...props }) => {
  return (
    <Image
      {...props}
      className={className ? className : "object-cover"}
      height={height ? height : 20}
      preview={false}
      fallback={props?.fallback ? props?.fallback : NoImage}
    />
  );
};

export default MoImage;
