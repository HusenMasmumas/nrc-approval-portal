import { SearchOutlined } from "@ant-design/icons";
import { StyledInput } from "components/styled/Styled";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import ListBroadcast from "./ListBroadcast";

const Broadcast = () => {
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });
  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <div className="text-2xl">Broadcast</div>
        <div>ทั้งหมด(3)</div>

        <div className=" mt-[20px]">
          <div className=" flex mb-[20px] items-center">
            <div>
              <StyledInput
                thm={{
                  height: "38px",
                  width: "331px",
                }}
                prefix={<SearchOutlined />}
                placeholder="ค้นหา"
              />
            </div>
          </div>

          <div>
            <ListBroadcast />
          </div>
        </div>
      </div>
    </MainPaginationProvider>
  );
};

export default Broadcast;
