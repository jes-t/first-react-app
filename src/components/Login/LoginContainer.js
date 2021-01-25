import React, { useEffect } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { getAuth, postLogin, deleteLogout } from '../../redux/auth-reducer'

export const LoginShellContainer = ({
  getAuth,
  login,
  isAuth,
  postLogin,
  deleteLogout,
}) => {
  useEffect(() => {
    getAuth()
  }, [])
  return (
    <Login
      isAuth={isAuth}
      login={login}
      postLogin={postLogin}
      deleteLogout={deleteLogout}
    />
  )
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
const mapDispatchToProps = {
  getAuth,
  postLogin,
  deleteLogout,
}
export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginShellContainer)
