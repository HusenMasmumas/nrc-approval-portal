import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import MoIcon from "components/icon/Icon";
import { StyledButton, StyledInput } from "components/styled/Styled";
import { useTranslation } from "react-i18next";
import Table from "./Table";

const ManageHelpCategory = () => {
  const { t } = useTranslation();
  return (
    <div>
      <HeaderContent.Navigation
        title={t("category")}
        navigation={["บริหารจัดการข้อมูล", "จัดการข้อมูลช่วยเหลือ", "หมวดหมู่"]}
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
            >
              <MoIcon keyData="plus" />
              <div className="ml-[10px]">เพิ่มหมวดช่วยเหลือ</div>
            </StyledButton>
          </div>
        </div>

        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default ManageHelpCategory;
