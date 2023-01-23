import MoTable from "components/table/Table";
import MoImage from "components/image/Image";
import { StyledDivPaddingLeft } from "components/styled/Styled";
import { dayjs } from "tools/timezone";
import MoIcon from "components/icon/Icon";
import { useMainPagination } from "providers/pagination";

const Table = () => {
  const { page } = useMainPagination();
  const data = [
    {
      key: 1,
      name: "ท่องเที่ยว",
      description: "-",
      qty: 1,
    },
    {
      key: 2,
      name: "ท่องเที่ยว",
      description: "-",
      qty: 1,
    },
    {
      key: 3,
      name: "ท่องเที่ยว",
      description: "-",
      qty: 1,
    },
    {
      key: 4,
      name: "ท่องเที่ยว",
      description: "-",
      qty: 1,
    },
    {
      key: 5,
      name: "ท่องเที่ยว",
      description: "-",
      qty: 1,
    },
  ];
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
      width: "5%",
      render: (_: any, __: any, index: number) => {
        return (
          <div>{page?.limitPage * (page?.currentPage - 1) + index + 1}</div>
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
            <MoImage src="" height={60} />

            <div className="pl-[10px]">{name}</div>
          </div>
        );
      },
    },

    {
      title: "คำอธิบาย",
      dataIndex: "description",
      key: "description",
      render: (description: string) => {
        return <div>{description}</div>;
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
  return (
    <div>
      <MoTable
        columns={columns}
        dataSource={data}
        paginationTable={true}
      />
    </div>
  );
};

export default Table;
