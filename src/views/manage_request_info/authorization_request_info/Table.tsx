import { TableRowSelection } from "antd/es/table/interface";
import MoIcon from "components/icon/Icon";
import CImage from "components/image/Image";
import StatusTable from "components/status/Status";
import { StyledButton, StyledDivPaddingLeft } from "components/styled/Styled";
import CTable from "components/table/Table";
import MainAuthorizationRequestInfoProvider from "providers/authorization_request_info";
import React, { useState } from "react";
import { dayjs } from "tools/timezone";
import ModalCoordinate from "./Modal";

const Table = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const onClick = (e: boolean) => {
    setIsModalOpen(e);
  };

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
      title: "เวลา",
      dataIndex: "time",
      key: "time",
      render: (time: string) => {
        return <div>{time}</div>;
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
              {status === 1 ? (
                <StyledButton
                  onClick={(e) => {
                    onClick(!isModalOpen);

                    e.stopPropagation();
                  }}
                  thm={{
                    height: "35px",
                  }}
                  htmlType="submit"
                >
                  รับเรื่อง
                </StyledButton>
              ) : (
                (status === 2 || status === 5) && (
                  <StyledButton
                    thm={{
                      height: "35px",
                      bg: "#FFFFFF",
                      border: "#647486",
                      color: "#141414",
                    }}
                    htmlType="submit"
                  >
                    พิจารณา
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
      status: 1,
      officer: "สุกัญญา",
      time: "09:00-11:00",
    },
    {
      no: "N161165001",
      name: "Xco Radio",
      song: "Narin",
      status: 1,
      officer: "สุกัญญา",
      time: "09:00-11:00",
    },
    {
      no: "N161165002",
      name: "Xco Radio",
      song: "Narin",
      status: 2,
      officer: "สุกัญญา",
      time: "09:00-11:00",
    },
    {
      no: "N161165003",
      name: "Xco Radio",
      song: "Narin",
      status: 3,
      officer: "สุกัญญา",
      time: "09:00-11:00",
    },
    {
      no: "N161165004",
      name: "Xco Radio",
      song: "Narin",
      status: 4,
      officer: "สุกัญญา",
      time: "09:00-11:00",
    },
  ];
  return (
    <MainAuthorizationRequestInfoProvider
      value={{
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen,
        onClick: onClick,
      }}
    >
      <div>
        <CTable
          rowKey="no"
          columns={columns}
          dataSource={data}
          rowSelection={{ ...rowSelection, checkStrictly: false }}
          paginationTable={true}
        />
        {!!isModalOpen && <ModalCoordinate />}
      </div>
    </MainAuthorizationRequestInfoProvider>
  );
};

export default Table;
