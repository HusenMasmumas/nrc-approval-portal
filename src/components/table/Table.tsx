import { Table, TableProps } from "antd";
import { FC } from "react";

interface Props extends TableProps<any> {}

const MoTable: FC<Props> = ({ ...props }) => {
  return (
    <div>
      <Table
        dataSource={props?.dataSource}
        columns={props.columns}
        pagination={false}
        {...props}
      />
    </div>
  );
};

export default MoTable;
