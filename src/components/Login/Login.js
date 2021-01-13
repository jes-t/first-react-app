import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LoginForm } from './LoginForm'

const i18n = {
  authTitle: 'Please authorize.',
}

export const Login = ({ login, isAuth }) => {
  return (
    <div>
      <Container>
        {isAuth ? login : <Link to="/login">{i18n.authTitle}</Link>}
      </Container>

      <LoginForm />
    </div>
  )
}
const Container = styled.div`
  text-align: center;
`
