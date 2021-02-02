import React, { useEffect } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import {
  postLogin,
  deleteLogout,
  setErrorMessage,
} from '../../redux/auth-reducer'

export const LoginShellContainer = ({
  login,
  isAuth,
  postLogin,
  deleteLogout,
  errorMessage,
  setErrorMessage,
}) => {
  return (
    <Login
      isAuth={isAuth}
      login={login}
      postLogin={postLogin}
      deleteLogout={deleteLogout}
      errorMessage={errorMessage}
      setErrorMessage={setErrorMessage}
    />
  )
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    errorMessage: state.auth.errorMessage,
  }
}
const mapDispatchToProps = {
  postLogin,
  deleteLogout,
  setErrorMessage,
}
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginShellContainer)

export default LoginContainer
