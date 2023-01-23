import { SearchOutlined } from "@ant-design/icons";
import HeaderContent from "components/header_content/HeaderContent";
import MoIcon from "components/icon/Icon";
import { StyledButton, StyledInput } from "components/styled/Styled";
import TabSearch from "components/tab_search/TabSearch";
import MainPaginationProvider from "providers/pagination";
import { IPagination } from "providers/pagination/interface";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Table from "./Table";

const tabSearch = [
    {
        name: "ทั้งหมด (3)",
        key: "1",
    },
    {
        name: "Super Admin (1)",
        key: "2",
    },
    {
        name: "Administrator (2)",
        key: "3",
    },
    {
        name: "Stream Manager (0)",
        key: "4",
    },
    {
        name: "Station Manager (0)",
        key: "5",
    },
    {
        name: "Officer (0)",
        key: "6",
    },
];

const StaffInfo = () => {
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
                    title={t("staffInfo")}
                    navigation={["จัดการหน่วยงาน", "ข้อมูลเจ้าหน้าที่"]}
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
                                <div className="ml-[10px]">เพิ่มเจ้าหน้าที่ในระบบ</div>
                            </StyledButton>
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

export default StaffInfo;
