import React, { useEffect } from 'react'
import { Login } from './Login'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'
import { userAPI } from '../../api/api'

export const LoginShellContainer = ({ setAuthUserData, login, isAuth }) => {
  useEffect(() => {
    userAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        setAuthUserData({ id, login, email })
      }
    })
  }, [])
  return (
    <Login setAuthUserData={setAuthUserData} isAuth={isAuth} login={login} />
  )
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
const mapDispatchToProps = {
  setAuthUserData,
}
export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginShellContainer)
