import React, { useEffect } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { getAuth } from '../../redux/auth-reducer'

export const LoginShellContainer = ({ getAuth, login, isAuth }) => {
  useEffect(() => {
    getAuth()
  }, [])
  return <Login isAuth={isAuth} login={login} />
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
const mapDispatchToProps = {
  getAuth,
}
export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginShellContainer)
