import CTable from "components/table/Table";
import MoIcon from "components/icon/Icon";
import { StyledDivPaddingLeft } from "components/styled/Styled";
import { dayjs } from "tools/timezone";
import { useMainPagination } from "providers/pagination";

const Table = () => {
  const { page } = useMainPagination();
  const columns: any = [
    {
      title: "#",
      dataIndex: "no",
      key: "index",
      align: "center",
      width: "5%",
      render: (_: string, __: any, index: number) => {
        return (
          <div>{page?.limitPage * (page?.currentPage - 1) + index + 1}</div>
        );
      },
    },

    {
      title: "คำถาม",
      dataIndex: "name",
      key: "name",
      render: (name: string) => {
        return (
          <div>
            <div>{name}</div>
          </div>
        );
      },
    },

    {
      title: "หมวดหมู่",
      dataIndex: "category",
      key: "category",
      render: (category: string) => {
        return <div>{category}</div>;
      },
    },

    {
      title: "ผู้เพิ่ม",
      dataIndex: "add",
      key: "add",
      align: "start",
      render: (add: string) => {
        return <div className="text-[#0064FF]">{add}</div>;
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
      name: "ฉันสามารถสมัครสมาชิกไต้อย่างไร ?",
      add: "Sukanya_admin",
      category: "เข้าระบบและการสมัครบัญชี",
      key: 1,
    },
    {
      name: "ฉันสามารถสมัครสมาชิกไต้อย่างไร ?",
      add: "Sukanya_admin",
      category: "เข้าระบบและการสมัครบัญชี",
      key: 2,
    },
    {
      name: "ฉันสามารถสมัครสมาชิกไต้อย่างไร ?",
      add: "Sukanya_admin",
      category: "เข้าระบบและการสมัครบัญชี",
      key: 3,
    },
    {
      name: "ฉันสามารถสมัครสมาชิกไต้อย่างไร ?",
      add: "Sukanya_admin",
      category: "เข้าระบบและการสมัครบัญชี",
      key: 4,
    },
    {
      name: "ฉันสามารถสมัครสมาชิกไต้อย่างไร ?",
      add: "Sukanya_admin",
      category: "เข้าระบบและการสมัครบัญชี",
      key: 5,
    },
  ];
  return (
    <div>
      <CTable columns={columns} dataSource={data} paginationTable={true} />
    </div>
  );
};

export default Table;
