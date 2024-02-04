import React from "react";

// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";
import { Layout, theme } from "antd";
import { SidebarWithCta } from "../components/Menu";
import { useFetchProductsQuery } from "../service/product";

const { Header, Content, Sider } = Layout;

const LayoutAdmin: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { data, error, isLoading } = useFetchProductsQuery();
  console.log(data, error, isLoading);

  return (
    <Layout style={{ padding: 0, background: colorBgContainer }}>
      <Sider
        style={{ padding: 0, background: colorBgContainer }}
        breakpoint="xxl"
        className="hidden lg:block"
        width={300}
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="" />
        <SidebarWithCta />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            data:
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
