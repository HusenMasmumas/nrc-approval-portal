import CTable from "components/table/Table";
import Radio from "assets/icon/station-user-info/radio.svg";
import MoImage from "components/image/Image";
import {
  StyledAvatarNone,
  StyledDivPaddingLeft,
  StyledSpanBorder,
} from "components/styled/Styled";
import { dayjs } from "tools/timezone";
import MoIcon from "components/icon/Icon";

const Table = () => {
  const data = [
    {
      key: 1,
      name: "Narin",
      gmail: "narin@gmail.com",
      radio: "Smooth Radio",
      role: "เจ้าของสถานี",
      station: "Xco Radio",
    },
    {
      key: 2,
      name: "Narin",
      gmail: "narin@gmail.com",
      radio: "Smooth Radio",
      role: "เจ้าของสถานี",
      station: "Xco Radio",
    },
    {
      key: 3,
      name: "Narin",
      gmail: "narin@gmail.com",
      radio: "Smooth Radio",
      role: "เจ้าของสถานี",
      station: "Xco Radio",
    },
    {
      key: 4,
      name: "Narin",
      gmail: "narin@gmail.com",
      radio: "Smooth Radio",
      role: "เจ้าของสถานี",
      station: "Xco Radio",
    },
    {
      key: 5,
      name: "Narin",
      gmail: "narin@gmail.com",
      radio: "Smooth Radio",
      role: "เจ้าของสถานี",
      station: "Xco Radio",
    },
  ];
  const columns = [
    {
      title: "",
      dataIndex: "key",
      key: "key",
      width: "5%",
      render: (no: string) => {
        return (
          <div>
            <MoImage src={Radio} height={25} />
          </div>
        );
      },
    },

    {
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      render: (name: string, data: any) => {
        return (
          <div className=" flex items-center">
            <div className="pr-[10px]">
              <StyledAvatarNone
                size={40}
                icon={<MoImage src="" height={40} />}
              />
            </div>
            <div className=" flex flex-col">
              <div>{name}</div>
              <div className="">{data?.gmail}</div>
            </div>
          </div>
        );
      },
    },

    {
      title: "บทบาท",
      dataIndex: "role",
      key: "role",
      render: (role: string) => {
        return <StyledSpanBorder>{role}</StyledSpanBorder>;
      },
    },

    {
      title: "สถานี",
      dataIndex: "station",
      key: "station",
      render: (station: string) => {
        return <div>{station}</div>;
      },
    },
    {
      title: "วันที่",
      dataIndex: "name",
      key: "name",
      render: (name: string, data: any) => {
        return <div>{dayjs().format("DD/MM/BB")}</div>;
      },
    },
    {
      title: "การดำเนินการ",
      dataIndex: "name",
      key: "name",
      render: (name: string, data: any) => {
        return (
          <div className=" flex">
            <StyledDivPaddingLeft>
              <MoIcon keyData="view" />
            </StyledDivPaddingLeft>
            <StyledDivPaddingLeft>
              <MoIcon keyData="edit" />
            </StyledDivPaddingLeft>
            <StyledDivPaddingLeft>
              <MoIcon keyData="delete" />
            </StyledDivPaddingLeft>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <CTable columns={columns} dataSource={data} paginationTable={true} />
    </div>
  );
};

export default Table;
