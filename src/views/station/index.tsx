import { StyledInput } from "components/styled/Styled";
import { SearchOutlined } from "@ant-design/icons";
import Table from "./Table";
import CardList from "./CardList";
import { useState } from "react";
import UnorderedListOutlined from "assets/icon/unordered_list_outlined.svg";
import AppStoreOutlined from "assets/icon/appstore_outlined.svg";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import CImage from "components/image/Image";
import { useTranslation } from "react-i18next";
import HeaderContent from "components/header_content/HeaderContent";

const Station = () => {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
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
        <HeaderContent title={t("radioStation")} />

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
                  <CImage src={AppStoreOutlined} preview={false} />{" "}
                </div>
              ) : (
                <div className=" cursor-pointer" onClick={setValueOpen}>
                  <CImage src={UnorderedListOutlined} preview={false} />
                </div>
              )}
            </div>
          </div>

          <div
            className={`${
              !!open ? " rounded-[5px] border border-[#DEE2E7]" : " hidden "
            }`}
          >
            <Table />
          </div>

          <div className={`${!!open ? " hidden " : ""}`}>
            <CardList />
          </div>
        </div>
      </div>
    </MainPaginationProvider>
  );
};

export default Station;
