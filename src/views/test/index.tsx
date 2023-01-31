import { useIsMutating, useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { openNotification } from "components/notification/Notification";
import { StyledButton, StyledInput } from "components/styled/Styled";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useCreatePrefix } from "services/prefix";
import Modal from "./Modal";
import Table from "./Table";

const Test = () => {
  const [form] = useForm();
  const [visible, setVisible] = useState(false);
  const create = useCreatePrefix();
  const isPrefixPost = useIsMutating(["post-prefix"]);
  const client = useQueryClient();
  const [page, setPage] = useState<IPagination>({
    total: 0,
    currentPage: 1,
    limitPage: 10,
  });

  const onManageModal = () => {
    setVisible(!visible);
  };

  const onFinish = (data: any) => {
    create.mutate(data, {
      onSuccess: (res) => {
        openNotification({ method: "POST_SUCCESS" });
        client.invalidateQueries(["get-prefix"]);
      },
      onError: (err) => {
        openNotification({ method: "POST_ERROR", message: String(err) });
      },
    });
    // onManageModal();
    console.log(data);
  };
  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <Form onFinish={onFinish} form={form}>
          <Form.Item name="name" label="name">
            <StyledInput />
          </Form.Item>

          <Form.Item name="type" label="type">
            <StyledInput />
          </Form.Item>

          <StyledButton
            loading={!!isPrefixPost ? true : false}
            htmlType="submit"
          >
            submit
          </StyledButton>
        </Form>
        {!!visible && (
          <Modal isModalOpen={visible} onManageModal={onManageModal} />
        )}

        <Table />
      </div>
    </MainPaginationProvider>
  );
};

export default Test;
