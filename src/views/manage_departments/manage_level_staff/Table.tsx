import MoIcon from "components/icon/Icon";
import { StyledDivPaddingLeft } from "components/styled/Styled";
import CTable from "components/table/Table";
import { useMainPagination } from "providers/pagination";
import { dayjs } from "tools/timezone";

const Table = () => {
  const { page } = useMainPagination();
  const data = [
    {
      key: 1,
      name: "Super Admin",
      description:
        "สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ได้ทุกประเภท และสามารถมองเห็นและดำเนินการกับรายการคำขอของทุกสถานีได้ทั้งหมด",
      qty: 1,
    },
    {
      key: 2,
      name: "Administrator",
      description:
        "สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ได้ทุกประเภท และสามารถมองเห็นและดำเนินการกับรายการคำขอของทุกสถานีได้ทั้งหมด",
      qty: 1,
    },
    {
      key: 3,
      name: "Stream Manager",
      description:
        "สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ได้ทุกประเภท และสามารถมองเห็นและดำเนินการกับรายการคำขอของทุกสถานีได้ทั้งหมด",
      qty: 1,
    },
    {
      key: 4,
      name: "Station Manager",
      description:
        "สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ได้ทุกประเภท และสามารถมองเห็นและดำเนินการกับรายการคำขอของทุกสถานีได้ทั้งหมด",
      qty: 1,
    },
    {
      key: 5,
      name: "Officer",
      description:
        "สามารถเพิ่ม ลบ แก้ไข ผู้ใช้ได้ทุกประเภท และสามารถมองเห็นและดำเนินการกับรายการคำขอของทุกสถานีได้ทั้งหมด",
      qty: 1,
    },
  ];
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
      title: "ชื่อ",
      dataIndex: "name",
      key: "name",
      render: (name: string) => {
        return <div>{name}</div>;
      },
    },

    {
      title: "คำอธิบาย",
      dataIndex: "description",
      key: "description",
      width: "40%",
      render: (description: string) => {
        return <div>{description}</div>;
      },
    },

    {
      title: `วันที่`,
      dataIndex: "date",
      key: "date",
      render: (_: string) => {
        return <>{dayjs().format("DD/MM/BB")}</>;
      },
    },
    {
      title: "จำนวน",
      dataIndex: "qty",
      key: "qty",
      render: (qty: number) => {
        return <div>{qty}</div>;
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
  return (
    <div>
      <CTable columns={columns} dataSource={data} paginationTable={true} />
    </div>
  );
};

export default Table;
