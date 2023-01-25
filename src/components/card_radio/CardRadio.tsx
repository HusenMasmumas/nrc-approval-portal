import { HeartOutlined } from "@ant-design/icons";
import { FC } from "react";
import CImage from "components/image/Image";

type Props = {
  image: string;
};

const CardRadio: FC<Props> = ({ image }) => {
  return (
    <div className="bg-white h-[232px] w-[289] drop-shadow-sm rounded-[5px]">
      <CImage
        className="object-cover"
        src={image}
        preview={false}
        height={190}
      />
      <div className="flex p-[10px] items-center text-[#6F7F91]">
        <div className="text-[14px]">Xco Radio</div>
        <div className="ml-auto cursor-pointer">
          <HeartOutlined />
        </div>
      </div>
    </div>
  );
};

export default CardRadio;
