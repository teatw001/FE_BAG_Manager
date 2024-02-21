import React, { useState } from "react";

import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import { SidebarWithCta } from "../components/Menu";
import { useFetchProductsQuery } from "../service/product";
import { Outlet } from "react-router-dom";
import { ComplexNavbar } from "./Header";
import { BreadcrumbsWithIcon } from "../components/Breadcrumbs";

const { Header, Content, Sider } = Layout;

const LayoutAdmin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { data, error, isLoading } = useFetchProductsQuery();
  console.log(data, error, isLoading);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ padding: 0, background: colorBgContainer }}>
      {/* <Sider
        style={{ padding: 0, background: colorBgContainer }}
        trigger={null}
        collapsible
        width={300}
        collapsed={collapsed}
      ></Sider> */}
      {/* <div className="demo-logo-vertical" /> <SidebarWithCta /> */}
      <Sider
        trigger={null}
        style={{ padding: 0, background: colorBgContainer }}
        breakpoint="xxl"
        className="hidden lg:block"
        collapsed={collapsed}
        width={260}
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="" />
        <SidebarWithCta />
      </Sider>
      <Layout>
        <Header
          className="flex justify-center "
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <ComplexNavbar />
        </Header>

        <Content style={{ margin: "24px 16px 0" }}>
          <BreadcrumbsWithIcon />
          <div
            style={{
              padding: 24,
              minHeight: 550,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
