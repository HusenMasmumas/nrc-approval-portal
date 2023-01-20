import { Select } from "antd";
import { TableRowSelection } from "antd/es/table/interface";
import MoTable from "components/table/Table";
import React, { useState } from "react";
import MoIcon from "components/icon/Icon";
import { StyledDivPaddingLeft } from "components/styled/Styled";

const Table = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection: TableRowSelection<any> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const onView = () => {};
  const onClock = () => {};

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
      title: "หมวดหมู่",
      dataIndex: "category",
      key: "category",
      render: (category: string) => {
        return <div>{category}</div>;
      },
    },

    {
      title: "ถูกใจ",
      dataIndex: "like",
      key: "like",
      align: "end",
      render: (like: string) => {
        return <div>{like}</div>;
      },
    },

    {
      title: "แชร์",
      dataIndex: "share",
      key: "share",
      align: "end",
      render: (share: string) => {
        return <div>{share}</div>;
      },
    },

    {
      title: "จำนวนการฟัง",
      dataIndex: "listeningCount",
      key: "listeningCount",
      align: "end",
      render: (listeningCount: string) => {
        return <div>{listeningCount}</div>;
      },
    },

    {
      title: `สถานะ `,
      dataIndex: "status",
      key: "status",
      align: "start",
      render: (status: string) => {
        return (
          <div onClick={(e) => e.stopPropagation()}>
            <Select
              className="green-select"
              defaultValue="1"
              style={{ width: 150 }}
              popupClassName="select-group "
              options={[
                { label: "กำลังออกอากาศ", value: "1" },
                { label: "ระงับชั่วคราว", value: "2" },
                { label: "ยกเลิกสถานี", value: "3" },
                {
                  label: (
                    <div className="border-b-[1px]   border-[#D9DEE4] flex justify-center " />
                  ),
                  options: [
                    {
                      label: (
                        <div style={{ color: "red" }} className=" text-red">
                          ระงับสถานี
                        </div>
                      ),
                      value: "4",
                    },
                  ],
                },
              ]}
            />
          </div>
        );
      },
    },

    {
      title: "การดำเนินการ",
      dataIndex: "listeningCount",
      key: "listeningCount",
      render: (listeningCount: string) => {
        return (
          <div className="flex items-center">
            <StyledDivPaddingLeft>
              <MoIcon keyData="view" onClick={onView} />
            </StyledDivPaddingLeft>
            <StyledDivPaddingLeft>
              <MoIcon keyData="clock" onClick={onClock} />
            </StyledDivPaddingLeft>
            <StyledDivPaddingLeft>
              <MoIcon keyData="menu" onClick={onClock} />
            </StyledDivPaddingLeft>
          </div>
        );
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
      category: "เรดิโอแนะนำ",
      share: 1,
      like: 56,
      listeningCount: "3,000",
    },
    {
      no: "N161165001",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
      category: "เรดิโอแนะนำ",
      share: 1,
      like: 56,
      listeningCount: "3,000",
    },
    {
      no: "N161165002",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
      category: "เรดิโอแนะนำ",
      share: 1,
      like: 56,
      listeningCount: "3,000",
    },
    {
      no: "N161165003",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
      category: "เรดิโอแนะนำ",
      share: 1,
      like: 56,
      listeningCount: "3,000",
    },
    {
      no: "N161165004",
      name: "Xco Radio",
      song: "Narin",
      status: "รอรับเรื่อง",
      officer: "สุกัญญา",
      date: "",
      category: "เรดิโอแนะนำ",
      share: 1,
      like: 56,
      listeningCount: "3,000",
    },
  ];
  return (
    <div>
      <MoTable
        rowKey="no"
        columns={columns}
        dataSource={data}
        rowSelection={{ ...rowSelection, checkStrictly: false }}
        paginationTable={true}
      />
    </div>
  );
};

export default Table;
