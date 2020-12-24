import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
  CommentOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './App.css'
import logo from './logo.png'
import { Profile } from './components/Profile/Profile'
import { UsersContainer } from './components/Users/UsersContainer'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import { Route, Switch, Link } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { HomePage } from './components/HomePage/HomePage'

const { Header, Content, Footer, Sider } = Layout
const { Item } = Menu

const App = ({ location }) => {
  const [activeKey, setActiveKey] = useState('')

  useEffect(() => {
    if (location.pathname.includes('/', 1)) {
      setActiveKey(
        location.pathname.substring(0, location.pathname.indexOf('/', 1))
      )
    } else {
      setActiveKey(location.pathname)
    }
  }, [location])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo">
          <img src={logo} />
        </div>
        <Menu theme="dark" selectedKeys={[activeKey]}>
          <Item key="/" icon={<HomeOutlined />}>
            <Link exact to="/">
              Home
            </Link>
          </Item>
          <Item key="/profile" icon={<ProfileOutlined />}>
            <Link exact to="/profile">
              Profile
            </Link>
          </Item>
          <Item key="/users" icon={<UsergroupAddOutlined />}>
            <Link exact to="/users">
              Users
            </Link>
          </Item>
          <Item key="/dialogs" icon={<CommentOutlined />}>
            <Link to="/dialogs">Dialogs</Link>
          </Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, height: '100%' }}
          >
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/profile/:id" render={() => <Profile />} />
              <Route exact path="/profile" render={() => <Profile />} />
              <Route exact path="/users" render={() => <UsersContainer />} />
              <Route
                exact
                path="/dialogs"
                render={() => <DialogsContainer />}
              />
              {/* <Route component={PageNotFound} /> */}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Котики!</Footer>
      </Layout>
    </Layout>
  )
}

export default App
