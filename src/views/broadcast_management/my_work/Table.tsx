import { ShareAltOutlined } from "@ant-design/icons";
import { TableRowSelection } from "antd/es/table/interface";
import MoIcon from "components/icon/Icon";
import MoImage from "components/image/Image";
import StatusTable from "components/status/Status";
import {
  StyledButton,
  StyledDivPaddingLeft,
  StyledStatus,
} from "components/styled/Styled";
import MoTable from "components/table/Table";
import React, { useState } from "react";
import { dayjs } from "tools/timezone";

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
              <MoImage height={70} src="" />
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
      title: "Code",
      dataIndex: "code",
      key: "code",
      render: (code: string) => {
        return <div>{code}</div>;
      },
    },

    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      render: (source: string) => {
        return (
          <div className="text-[#0064FF] flex text-center">
            <div className="pr-[10px]">
              <ShareAltOutlined />
            </div>
            <div>{source}</div>
          </div>
        );
      },
    },

    {
      title: "สถานะคำขอ",
      dataIndex: "status",
      key: "status",
      render: (status: number) => {
        return <StatusTable keyData={status} />;
      },
    },

    {
      title: "วันที่",
      dataIndex: "date",
      key: "date",
      render: (date: string) => {
        return <div>{dayjs().format("DD-MM-BB")}</div>;
      },
    },

    {
      title: "เจ้าหน้าที่ดำเนินการ",
      dataIndex: "officer",
      key: "officer",

      render: (officer: string) => {
        return <div>{officer}</div>;
      },
    },

    {
      title: "การดำเนินการ",
      dataIndex: "status",
      key: "status",
      render: (status: number) => {
        return (
          <div className="flex items-center">
            <StyledDivPaddingLeft>
              <MoIcon keyData="view" onClick={onView} />
            </StyledDivPaddingLeft>
            <StyledDivPaddingLeft>
              <MoIcon keyData="clock" onClick={onClock} />
            </StyledDivPaddingLeft>
            <div className="ml-[10px]">
              {status === 3 ? (
                <StyledStatus
                  className=" flex justify-center items-center"
                  thm={{
                    bg: "#EAF7ED",
                    border: "#EAF7ED",
                    width: "25px",
                  }}
                >
                  <StyledStatus
                    thm={{
                      bg: "#28A745",
                      border: "#28A745",
                    }}
                  />
                </StyledStatus>
              ) : (
                status === 8 && (
                  <StyledButton
                    thm={{
                      height: "35px",
                      bg: "#FFFFFF",
                      border: "#647486",
                      color: "#141414",
                    }}
                    htmlType="submit"
                  >
                    ทดสอบ
                  </StyledButton>
                )
              )}
            </div>
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
      status: 8,
      officer: "สุกัญญา",
      code: "Xco",
      source: "Https://...Xco.m3u8",
    },
    {
      no: "N161165001",
      name: "Xco Radio",
      song: "Narin",
      status: 3,
      officer: "สุกัญญา",
      code: "Jaz",
      source: "Https://...Xco.m3u8",
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
