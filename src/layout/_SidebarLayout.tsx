import React, { FC } from "react";
import { Layout, Menu, MenuProps } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
type MenuItem = Required<MenuProps>["items"][number];
// import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
const { Sider } = Layout;

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

type Props = {
  collapsed: boolean;
};
const SidebarLayout: FC<Props> = ({ collapsed }) => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const gotoMenu = (k: any) => {
    navigate(k?.key);
  };

  const items: MenuItem[] = [
    getItem(t("dashboard"), "/dashboard", <MenuFoldOutlined />),
    getItem(t("profile"), "/profile", <MenuFoldOutlined />),
    getItem(t("station"), "/station", <MenuFoldOutlined />),

    getItem("User", "sub1", <MenuFoldOutlined />, [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", <MenuFoldOutlined />, [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9", <MenuFoldOutlined />),
  ];

  return (
    <Sider width={200} style={{ background: "" }}>
      <Menu
        onClick={gotoMenu}
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
        items={items}
      />
    </Sider>
  );
};

export default SidebarLayout;
