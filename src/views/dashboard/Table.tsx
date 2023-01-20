import StatusTable from "components/status/Status";
import MoTable from "components/table/Table";
import { dayjs } from "tools/timezone";

const Table = () => {
  const columns: any = [
    {
      title: "เลขที่",
      dataIndex: "no",
      key: "index",
      //   align: "center",
      //   width: "14%",
      render: (no: string) => {
        return <div>{no}</div>;
      },
    },

    {
      title: "ชื่อสถานี",
      dataIndex: "name",
      key: "name",
      render: (name: string, data: any) => {
        return (
          <div>
            <div>{data?.song}</div>
            <div>{name}</div>
          </div>
        );
      },
    },

    {
      title: `สถานะ `,
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        return <StatusTable keyData={6} />;
      },
    },

    {
      title: `เจ้าหน้าที่`,
      dataIndex: "officer",
      key: "officer",
      render: (officer: string) => {
        return <>{officer}</>;
      },
    },

    {
      title: `วันที่`,
      dataIndex: "date",
      key: "date",
      render: (date: string) => {
        return <>{dayjs().format("DD/MM/BB")}</>;
      },
    },
  ];

  const data = [
    {
      no: "N161165005",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
    },
    {
      no: "N161165001",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
    },
    {
      no: "N161165002",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
    },
    {
      no: "N161165003",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
    },
    {
      no: "N161165004",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
    },
  ];

  return (
    <div>
      <MoTable rowKey="no" columns={columns} dataSource={data} />
    </div>
  );
};

export default Table;
