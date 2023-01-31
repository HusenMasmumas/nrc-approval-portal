import { useQueryClient } from "@tanstack/react-query";
import { openNotification } from "components/notification/Notification";
import CTable from "components/table/Table";
import { useMainPagination } from "providers/pagination";
import { useEffect, useState } from "react";
import { useDeletePrefix, usePrefixList } from "services/prefix";
import Modal from "./Modal";
import ModalDelete from "./ModalDelete";

const Table = () => {
  const { page, setPage } = useMainPagination();
  const [idPrefix, setIdPrefix] = useState<number | null>();
  const [isDelete, setIsDelete] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const deletePrefix = useDeletePrefix();
  const client = useQueryClient();
  const prefix = usePrefixList({
    page: page?.currentPage,
    limit: page?.limitPage,
    orderby: "DESC",
  });

  useEffect(() => {
    if (!prefix?.data) return;
    setPage({ ...page, total: prefix.data.result?.[0]?.total });
  }, [prefix?.data]);

  const onManageUpdateModal = () => {
    setIsUpdate(!isUpdate);
  };

  const onManageModal = () => {
    setIsDelete(!isDelete);
  };

  const deleteValue = () => {
    deletePrefix.mutate(idPrefix, {
      onSuccess: () => {
        client.invalidateQueries(["get-prefix"]);
        openNotification({ method: "DEL_SUCCESS" });
        onManageModal();
      },
      onError: (err) => {
        openNotification({ method: "DEL_ERROR", message: String(err) });
      },
    });
  };

  const columns: any = [
    {
      title: "ลำดับ",
      dataIndex: "index",
      key: "index",
      render: (_: string, __: string, index: number) => {
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
      title: "type",
      dataIndex: "type",
      key: "type",
      render: (type: string) => {
        return <div>{type}</div>;
      },
    },

    {
      title: "ลบ",
      dataIndex: "id",
      key: "id",
      render: (id: number) => {
        return (
          <div
            className=" cursor-pointer hover:text-[red]"
            onClick={(e) => {
              setIdPrefix(id);
              onManageModal();
              e.stopPropagation();
            }}
          >
            ลบ
          </div>
        );
      },
    },

    {
      title: "แก้ไข",
      dataIndex: "id",
      key: "id",
      render: (id: number) => {
        return (
          <div
            className=" cursor-pointer hover:text-[red]"
            onClick={(e) => {
              setIdPrefix(id);
              onManageUpdateModal();
              e.stopPropagation();
            }}
          >
            แก้ไข
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <CTable
        rowKey="id"
        columns={columns}
        dataSource={prefix?.data?.result?.[0]?.data}
        paginationTable={true}
      />
      {!!isDelete && (
        <ModalDelete
          isModalOpen={isDelete}
          onManageModal={onManageModal}
          deleteData={deleteValue}
        />
      )}
      {!!isUpdate && (
        <Modal
          isModalOpen={isUpdate}
          onManageModal={onManageUpdateModal}
          idPrefix={idPrefix}
        />
      )}
    </div>
  );
};

export default Table;
