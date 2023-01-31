import { UploadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { UploadFile, UploadProps } from "antd/lib/upload/interface";
import { Button, Form, FormInstance, Input, Modal, Upload } from "antd";

interface Props extends UploadProps {
  uploadLabel?: string;
  form?: FormInstance;
  keyName?: string;
}
const FileSpace = ({
  multiple = false,
  uploadLabel = "Upload",
  form,
  keyName,
  ...props
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<UploadFile | undefined>();
  const [_form] = Form.useForm();

  const toggle = () => {
    setVisible(!visible);
  };

  const dummyRequest = ({ onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  return (
    <>
      <ChangeFileNameModal
        form={form || _form}
        onClose={toggle}
        visible={visible}
        file={current}
        keyName={keyName || ""}
      />

      <Upload
        className={form ? "file-space cursor-upload" : "file-space "}
        multiple={multiple}
        listType="picture"
        customRequest={props.customRequest ? props.customRequest : dummyRequest}
        onPreview={
          form
            ? (e) => {
                toggle();
                setCurrent(e);
              }
            : undefined
        }
        {...props}
      >
        <Button icon={<UploadOutlined />} disabled={false} block type="dashed">
          {uploadLabel}
        </Button>
      </Upload>
    </>
  );
};

const ChangeFileNameModal = ({
  onClose,
  visible,
  form,
  file,
  keyName,
}: {
  onClose: () => void;
  visible: boolean;
  form: FormInstance;
  file?: UploadFile;
  keyName: string;
}) => {
  const [text, setText] = useState<string | undefined>("");
  const { t } = useTranslation();
  useEffect(() => {
    setText(file?.name);
  }, [file]);

  const onSubmit = () => {
    const data = form.getFieldsValue();
    const prev = form.getFieldsValue()[`${keyName}`] as UploadFile[];

    const next = prev.map((item: any) => {
      if (item.uid === file?.uid) {
        return {
          ...item,
          name: text,
          originFileObj: new File([item?.originFileObj], String(text), {
            type: item.originFileObj.type,
          }),
        };
      }
      return item;
    });

    form.setFieldsValue({ ...data, [`${keyName}`]: next });
    onClose();
  };

  return (
    <Modal
      okText={t("save")}
      cancelText={t("cancel")}
      centered
      open={visible}
      onCancel={onClose}
      title={t("editFileName")}
      onOk={onSubmit}
    >
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </Modal>
  );
};

export default FileSpace;
