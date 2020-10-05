import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
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
import { Route, NavLink, Switch } from "react-router-dom";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { HomePage } from "./components/HomePage/HomePage";

const { Header, Content, Footer, Sider } = Layout;
const { Item } = Menu;

const App = (props) => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={[props.location.pathname]}>
          <Item key="/" icon={<HomeOutlined />}>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Item>
          <Item key="/profile" icon={<ProfileOutlined />}>
            <NavLink exact to="/profile">
              Profile
            </NavLink>
          </Item>
          <Item key="/users" icon={<UsergroupAddOutlined />}>
            <NavLink exact to="/users">
              Users
            </NavLink>
          </Item>
          <Item key="/dialogs" icon={<CommentOutlined />}>
            <NavLink exact to="/dialogs">
              Dialogs
            </NavLink>
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
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/profile" render={() => <Profile posts={props.state.posts} />} />
              <Route exact path="/users" render={() => <Users users={props.state.usersArr} />}  />
              <Route exact path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogs} />} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Котики!</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
