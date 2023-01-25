import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import MoIcon from "components/icon/Icon";
import { StyledButton, StyledInput } from "components/styled/Styled";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ModalAddUserStation from "./Modal";
import Table from "./Table";

const StationUserInfo = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });

  const onClick = (e: boolean) => {
    setIsModalOpen(e);
  };

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
                onClick={() => onClick(!isModalOpen)}
              >
                <MoIcon keyData="plus" />
                <div className="ml-[10px]">เพิ่มหมวดหมู่</div>
              </StyledButton>
            </div>
          </div>

          <div className="rounded-[5px] border border-[#DEE2E7]">
            <Table />
          </div>
        </div>
        {isModalOpen && (
          <ModalAddUserStation isModalOpen={isModalOpen} onClick={onClick} />
        )}
      </div>
    </MainPaginationProvider>
  );
};

export default StationUserInfo;
