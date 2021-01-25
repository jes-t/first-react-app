import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoginForm } from './LoginForm'
import { Button } from 'antd'

const i18n = {
  authTitle: 'Please authorize.  ',
}

export const Login = ({
  login,
  isAuth,
  postLogin,
  deleteLogout,
  errorMessage,
  setErrorMessage,
}) => {
  return (
    <div>
      {isAuth ? (
        <Container>
          {login}
          <Button onClick={deleteLogout} disabled={!isAuth}>
            Log out
          </Button>
        </Container>
      ) : (
        <div>
          <Link to="/login">{i18n.authTitle}</Link>
          <LoginForm
            postLogin={postLogin}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        </div>
      )}
    </div>
  )
}
const Container = styled.div`
  text-align: center;
`
