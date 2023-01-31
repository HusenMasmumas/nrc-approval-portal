import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import CIcon from "components/icon/Icon";
import { StyledButton, StyledInput } from "components/styled/Styled";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormAddStationInfoCategory from "./form";
import Table from "./Table";

const CategoryManageStation = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });

  const onCloseModal = (e: boolean) => {
    setIsModalOpen(e);
  };

  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <HeaderContent.Navigation
          title={t("category")}
          navigation={["บริหารจัดการข้อมูล", "จัดการข้อมูลสถานี", "หมวดหมู่"]}
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
            <div className="ml-auto">
              <StyledButton
                thm={{ height: "40px" }}
                className=" flex justify-center items-center"
                onClick={() => onCloseModal(!isModalOpen)}
              >
                <CIcon keyData="plus" />
                <div className="ml-[10px]">เพิ่มหมวดหมู่</div>
              </StyledButton>
            </div>
          </div>

          <div className="rounded-[5px] border border-[#DEE2E7]">
            <Table />
          </div>
        </div>
        {!!isModalOpen && (
          <FormAddStationInfoCategory
            isModalOpen={isModalOpen}
            onCloseModal={onCloseModal}
          />
        )}
      </div>
    </MainPaginationProvider>
  );
};

export default CategoryManageStation;
