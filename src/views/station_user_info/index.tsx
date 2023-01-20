import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import MoIcon from "components/icon/Icon";
import { StyledButton, StyledInput } from "components/styled/Styled";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Table from "./Table";

const StationUserInfo = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });

  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <HeaderContent title={t("stationUserInfo")} />
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
              <StyledButton
                thm={{ height: "40px" }}
                className=" flex justify-center items-center"
              >
                <MoIcon keyData="plus" />
                <div className="ml-[10px]">เพิ่มหมวดหมู่</div>
              </StyledButton>
            </div>
          </div>

          <div>
            <Table />
          </div>
        </div>
      </div>
    </MainPaginationProvider>
  );
};

export default StationUserInfo;
