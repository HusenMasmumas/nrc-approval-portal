import { useQueryClient } from "@tanstack/react-query";
import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import CModal from "components/modal/Modal";
import { openNotification } from "components/notification/Notification";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { FC, useEffect } from "react";
import { useGetByIdPrefix, useUpdatePrefix } from "services/prefix";

type Props = {
  isModalOpen: boolean;
  onManageModal: (e: boolean) => void;
  idPrefix?: number | null;
};

const Modal: FC<Props> = ({ isModalOpen, onManageModal, idPrefix }) => {
  const [form] = useForm();
  const { data } = useGetByIdPrefix(!!idPrefix, idPrefix);
  const update = useUpdatePrefix();
  const client = useQueryClient();
  // const createFile = useCreateFile();

  useEffect(() => {
    if (!data) return;
    form.setFieldsValue({ ...data?.result?.[0] });
    // eslint-disable-next-line
  }, [data]);

  const onFinish = (data: any) => {
    var formData = new FormData();
    Object.entries(data).forEach(([key, value]: any) => {
      if (!!value?.[0]?.originFileObj) {
        value?.forEach((item: any) => {
          formData.append(key, item?.originFileObj);
        });
      } else formData.append(key, value);
    });

    update.mutate(
      { data: data, id: idPrefix },
      {
        onSuccess: () => {
          openNotification({ method: "PUT_SUCCESS" });
          client.invalidateQueries(["get-prefix"]);
        },
        onError: (err) => {
          openNotification({ method: "PUT_ERROR", message: String(err) });
        },
        onSettled: () => {
          onManageModal(false);
        },
      }
    );
  };

  // const getFile = (e: any) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e && e.fileList;
  // };

  // const getFileName = () => {
  //   return false;
  // };
  return (
    <CModal
      open={isModalOpen}
      title="update prefix"
      onCancel={() => onManageModal(false)}
      body={
        <>
          <Form onFinish={onFinish} form={form}>
            <Form.Item name="name" label="name">
              <StyledInput />
            </Form.Item>

            <Form.Item name="type" label="type">
              <StyledInput />
            </Form.Item>

            {/* <Form.Item
              name="file"
              valuePropName="fileList"
              getValueFromEvent={getFile}
            >
              <FileSpace
                beforeUpload={getFileName}
                form={form}
                keyName="file"
              />
            </Form.Item> */}
          </Form>
        </>
      }
      footerRender={
        <>
          <div>
            <StyledButton
              thm={{
                bg: "#ffffff",
                color: "#141414",
                border: "#E0E0E0",
              }}
              onClick={() => onManageModal(false)}
            >
              ยกเลิก
            </StyledButton>
          </div>
          <div>
            <StyledButton
              loading={update.isLoading}
              onClick={() => {
                form.submit();
                // onManageModal(false);
              }}
              htmlType="submit"
            >
              ยืนยัน
            </StyledButton>
          </div>
        </>
      }
    />
  );
};

export default Modal;
