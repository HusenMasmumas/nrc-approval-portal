import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import MoIcon from "components/icon/Icon";
import { StyledButton, StyledInput } from "components/styled/Styled";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FormAddCategory from "./form";
import Table from "./Table";

const ManageHelpCategory = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState<IPagination>({
    total: 90,
    currentPage: 1,
    limitPage: 10,
  });

  const onManageModal = (e: boolean) => {
    setIsModalOpen(e);
  };
  return (
    <MainPaginationProvider value={{ page: page, setPage: setPage }}>
      <div>
        <HeaderContent.Navigation
          title={t("category")}
          navigation={[
            "บริหารจัดการข้อมูล",
            "จัดการข้อมูลช่วยเหลือ",
            "หมวดหมู่",
          ]}
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
                onClick={() => onManageModal(!isModalOpen)}
              >
                <MoIcon keyData="plus" />
                <div className="ml-[10px]">เพิ่มหมวดช่วยเหลือ</div>
              </StyledButton>
            </div>
          </div>

          <div className="rounded-[5px] border border-[#DEE2E7]">
            <Table />
          </div>
        </div>
        {!!isModalOpen && (
          <FormAddCategory
            isModalOpen={isModalOpen}
            onManageModal={onManageModal}
          />
        )}
      </div>
    </MainPaginationProvider>
  );
};

export default ManageHelpCategory;
