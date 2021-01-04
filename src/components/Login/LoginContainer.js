import React, { useEffect } from 'react'
import { Login } from './Login'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/auth-reducer'

export const LoginShellContainer = ({ setAuthUserData, login, isAuth }) => {
  useEffect(() => {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { id, email, login } = response.data.data
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
