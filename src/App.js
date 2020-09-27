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
import { Profile } from "./components/Profile/Profile";
import { Users } from "./components/Users/Users";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, NavLink } from "react-router-dom";

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
            <NavLink to="/profile">Profile</NavLink>
          </Item>
          <Item key="2" icon={<UsergroupAddOutlined />}>
            <NavLink to="/users">Users</NavLink>
          </Item>
          <Item key="3" icon={<CommentOutlined />}>
            <NavLink to="/dialogs">Dialogs</NavLink>
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
            <Route path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
            <Route path="/dialogs" component={Dialogs} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Котики!</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
