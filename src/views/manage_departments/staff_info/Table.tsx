import { Avatar } from "antd";
import MoIcon from "components/icon/Icon";
import MoImage from "components/image/Image";
import {
    StyledDivPaddingLeft,
    StyledSpanBorder,
} from "components/styled/Styled";
import MoTable from "components/table/Table";
import { dayjs } from "tools/timezone";

const Table = () => {
    const data = [
        {
            key: 1,
            name: "Sukanya_admin (คุณ)",
            role: "Super Admin",
            gmail: "Sukanya@gmail.com",
            time: "• 1 นาทีที่แล้ว",
        },
        {
            key: 2,
            name: "Peeraya_admin",
            role: "Administrator",
            gmail: "Peeraya@gmail.com",
            time: "• 1 นาทีที่แล้ว",
        },
        {
            key: 3,
            name: "Jirut_admin",
            role: "Administrator",
            gmail: "Jirut@gmail.com",
            time: "• 1 นาทีที่แล้ว",
        },
    ];
    const columns = [
        {
            title: "ชื่อ",
            dataIndex: "name",
            key: "name",
            render: (name: string, data: any) => {
                return (
                    <div className=" flex ">
                        <Avatar size={40} icon={<MoImage src="" height={60} />} />

                        <div className=" flex flex-col pl-[10px]">
                            <div className="">{name}</div>
                            <div className="text-[#868E96] text-[12px]">{data?.gmail}</div>
                            <div className="text-[#868E96] text-[12px]">{data?.time}</div>
                        </div>
                    </div>
                );
            },
        },

        {
            title: "",
            dataIndex: "name",
            key: "name",
            render: (_: string) => {
                return <div>{dayjs().format("DD/MM/BB")}</div>;
            },
        },
        {
            title: "",
            dataIndex: "role",
            key: "role",
            render: (role: string) => {
                return <StyledSpanBorder>{role}</StyledSpanBorder>;
            },
        },

        {
            title: "การดำเนินการ",
            dataIndex: "name",
            key: "name",
            render: (_: string) => {
                return (
                    <div className=" flex">
                        <StyledDivPaddingLeft>
                            <MoIcon keyData="edit" />
                        </StyledDivPaddingLeft>
                        <StyledDivPaddingLeft>
                            <MoIcon keyData="delete" />
                        </StyledDivPaddingLeft>
                    </div>
                );
            },
        },
    ];
    return (
        <div>
            <MoTable columns={columns} dataSource={data} paginationTable={true} />
        </div>
    );
};

export default Table;
