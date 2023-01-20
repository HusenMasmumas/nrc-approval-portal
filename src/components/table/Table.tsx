import { Table, TableProps } from "antd";
import MoPagination from "components/pagination/Pagination";
import { FC } from "react";

interface Props extends TableProps<any> {
  classNamePagination?: string;
  paginationTable?: boolean;
}

const MoTable: FC<Props> = ({
  paginationTable = true,
  classNamePagination,
  ...props
}) => {
  return (
    <div>
      <Table
        dataSource={props?.dataSource}
        columns={props.columns}
        pagination={false}
        {...props}
      />
      {!!paginationTable ? (
        <div className=" bg-white flex p-[15px] justify-end ">
          <MoPagination className={classNamePagination} />
        </div>
      ) : null}
    </div>
  );
};

export default MoTable;
