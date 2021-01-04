import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const i18n = {
  authTitle: 'Please authorize.',
}

export const Login = ({ login, isAuth }) => {
  return (
    <Container>
      {isAuth ? login : <Link to="/login">{i18n.authTitle}</Link>}
    </Container>
  )
}
const Container = styled.div`
  text-align: center;
`
