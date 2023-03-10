import { Popover, Select } from "antd";
import { TableRowSelection } from "antd/es/table/interface";
import CTable from "components/table/Table";
import React, { useState } from "react";
import CIcon from "components/icon/Icon";
import { StyledDivPaddingLeft } from "components/styled/Styled";
import CImage from "components/image/Image";

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
          <div className=" flex items-center ">
            <div>
              <CImage height={70} src="" />
            </div>
            <div className="flex flex-col pl-[10px]">
              <div>{data?.song}</div>
              <div>{name}</div>
            </div>
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
          <div className="flex items-center w-[90px]">
            <StyledDivPaddingLeft>
              <CIcon keyData="view" onClick={onView} />
            </StyledDivPaddingLeft>
            <StyledDivPaddingLeft>
              <CIcon keyData="clock" onClick={onClock} />
            </StyledDivPaddingLeft>

            <Popover
              autoAdjustOverflow={false}
              content={
                <div>
                  <div>ดูรายการ </div>
                  <div>แก้ไข</div>
                  <div>แชร์</div>
                </div>
              }
            >
              <StyledDivPaddingLeft>
                <CIcon keyData="menu" onClick={onClock} />
              </StyledDivPaddingLeft>
            </Popover>
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
      <CTable
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
