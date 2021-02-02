import React, { useState, useEffect, lazy } from 'react'
import { Layout, Menu, Spin } from 'antd'
import {
  HomeOutlined,
  ProfileOutlined,
  UsergroupAddOutlined,
  CommentOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import 'antd/dist/antd.css'
import './App.css'
import logo from './logo.png'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { HomePage } from './components/HomePage/HomePage'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { initializeApp } from './redux/app-reducer'
import { compose } from 'redux'
import { Profile } from './components/Profile/Profile'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = lazy(() =>
  import('./components/Dialogs/DialogsContainer')
)
const LoginContainer = lazy(() => import('./components/Login/LoginContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

const { Header, Content, Footer, Sider } = Layout
const { Item } = Menu

const App = ({ location, initialized, initializeApp }) => {
  const [activeKey, setActiveKey] = useState('')
  useEffect(() => {
    initializeApp()
  }, [])

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
    <>
      {!initialized ? (
        <SpinContainer>
          <Spin tip="Loading..." size="large" />
        </SpinContainer>
      ) : (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <div className="logo">
              <img src={logo} />
            </div>
            <StyledMenu theme="dark" selectedKeys={[activeKey]}>
              <Item key="/" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Item>
              <Item key="/profile" icon={<ProfileOutlined />}>
                <Link to="/profile">Profile</Link>
              </Item>
              <Item key="/users" icon={<UsergroupAddOutlined />}>
                <Link to="/users">Users</Link>
              </Item>
              <Item key="/dialogs" icon={<CommentOutlined />}>
                <Link to="/dialogs">Dialogs</Link>
              </Item>
              <Item key="/login" icon={<SettingOutlined />}>
                <Link to="/login">Login</Link>
              </Item>
            </StyledMenu>
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
                  <Route
                    exact
                    path="/users"
                    render={withSuspense(UsersContainer)}
                  />
                  <Route
                    exact
                    path="/dialogs"
                    render={withSuspense(DialogsContainer)}
                  />
                  <Route
                    exact
                    path="/login"
                    render={withSuspense(LoginContainer)}
                  />
                  <Route path="*" component={PageNotFound} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}></Footer>
          </Layout>
        </Layout>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
const mapDispatchToProps = {
  initializeApp,
}
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App)

const StyledMenu = styled(Menu)`
  min-height: calc(100% - 120px);
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  .ant-menu-item:last-child {
    margin-top: auto;
  }
`
const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
