import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import { StyledInput } from "components/styled/Styled";
import TabSearch from "components/tab_search/TabSearch";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Table from "./Table";

const tabSearch = [
  {
    name: "งานทั้งหมด (2)",
    key: "1",
  },
  {
    name: "รอพิจารณา (1)",
    key: "2",
  },
  {
    name: "อนุมัติ (1)",
    key: "3",
  },

  {
    name: "ไม่อนุมัติ (0)",
    key: "6",
  },
];

const MyWorkBroadcast = () => {
  const { t } = useTranslation();
  const [keyTab, setKeyTab] = useState("1");
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });

  const onClickTab = (key: string) => {
    setKeyTab(key);
  };

  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <HeaderContent.Navigation
          title={t("myWork")}
          navigation={["ข้อมูลคำขอออกอากาศ", "งานของฉัน"]}
        />
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

          <TabSearch tab={tabSearch} value={keyTab} onClick={onClickTab} />

          <div className="rounded-[5px] border border-[#DEE2E7] mt-[30px]">
            <Table />
          </div>
        </div>
      </div>
    </MainPaginationProvider>
  );
};

export default MyWorkBroadcast;
