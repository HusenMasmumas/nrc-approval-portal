import { StyledInput } from "components/styled/Styled";
import { SearchOutlined } from "@ant-design/icons";
import Table from "./Table";
import CardList from "./CardList";
import { useState } from "react";
import { Image } from "antd";
import UnorderedListOutlined from "assets/icon/unordered_list_outlined.svg";
import AppStoreOutlined from "assets/icon/appstore_outlined.svg";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";

const Station = () => {
  const [open, setOpen] = useState(true);
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });
  const setValueOpen = () => {
    setOpen(!open);
  };
  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <div className="text-2xl">สถานีวิทยุ</div>
        <div>ทั้งหมด(5)</div>

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
            <div className="ml-auto">
              {!!open ? (
                <div className=" cursor-pointer" onClick={setValueOpen}>
                  <Image src={AppStoreOutlined} preview={false} />{" "}
                </div>
              ) : (
                <div className=" cursor-pointer" onClick={setValueOpen}>
                  <Image src={UnorderedListOutlined} preview={false} />
                </div>
              )}
            </div>
          </div>

          <div className={`${!!open ? "open_list" : " hidden "}`}>
            <Table />
          </div>

          <div className={`${!!open ? " hidden " : "open_list"}`}>
            <CardList />
          </div>
        </div>
      </div>
    </MainPaginationProvider>
  );
};

export default Station;
