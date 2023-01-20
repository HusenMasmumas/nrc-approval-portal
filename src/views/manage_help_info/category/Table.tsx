import MoTable from "components/table/Table";
import MoIcon from "components/icon/Icon";
import { StyledDivPaddingLeft } from "components/styled/Styled";
import { dayjs } from "tools/timezone";

const Table = () => {
  const columns: any = [
    {
      title: "#",
      dataIndex: "no",
      key: "index",
      align: "center",
      width: "5%",
      render: (_: string, __: any, index: number) => {
        return <div>{index + 1}</div>;
      },
    },

    {
      title: "ชื่อหมวดหมู่",
      dataIndex: "name",
      key: "name",
      render: (name: string) => {
        return <div>{name}</div>;
      },
    },

    {
      title: "คำอธิบาย",
      dataIndex: "name",
      key: "name",
      render: (name: string) => {
        return <div>-</div>;
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
      title: "จำนวน",
      dataIndex: "number",
      key: "number",
      render: (number: number) => {
        return <div>{number}</div>;
      },
    },
    {
      title: "การดำเนินการ",
      dataIndex: "name",
      key: "name",
      render: (_: string) => {
        return (
          <div className=" flex">
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

  const data = [
    {
      name: "เข้าระบบและการสมัครบัญชี",
      add: "Sukanya_admin",
      number: 1,
    },
    {
      name: "เข้าระบบและการสมัครบัญชี",
      add: "Sukanya_admin",
      number: 1,
    },
    {
      name: "เข้าระบบและการสมัครบัญชี",
      add: "Sukanya_admin",
      number: 1,
    },
    {
      name: "เข้าระบบและการสมัครบัญชี",
      add: "Sukanya_admin",
      number: 1,
    },
    {
      name: "เข้าระบบและการสมัครบัญชี",
      add: "Sukanya_admin",
      number: 1,
    },
  ];
  return (
    <div>
      <MoTable
        rowKey="no"
        columns={columns}
        dataSource={data}
        paginationTable={true}
      />
    </div>
  );
};

export default Table;
