import React from "react";
import { Layout, Menu } from "antd";
import {
  ProfileOutlined,
  UsergroupAddOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./App.css";
import logo from "./logo.png";

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]}>
          <Item key="1" icon={<ProfileOutlined />}>
            Profile
          </Item>
          <Item key="2" icon={<UsergroupAddOutlined />}>
            Users
          </Item>
          <Item key="3" icon={<CommentOutlined />}>
            Messages
          </Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, height: "100%" }}
          >
            Bjorn is a cat!!!
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Котики!</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
