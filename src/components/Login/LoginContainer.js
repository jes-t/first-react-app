import React, { useEffect } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import {
  getAuth,
  postLogin,
  deleteLogout,
  setErrorMessage,
} from '../../redux/auth-reducer'

export const LoginShellContainer = ({
  getAuth,
  login,
  isAuth,
  postLogin,
  deleteLogout,
  errorMessage,
  setErrorMessage,
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
  getAuth,
  postLogin,
  deleteLogout,
  setErrorMessage,
}
export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginShellContainer)
