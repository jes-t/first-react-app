import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Login = ({ login, isAuth }) => {
  return (
    <DivContainer>
      {isAuth ? login : <Link to="/login">Необходимо пройти авторизацию</Link>}
    </DivContainer>
  )
}
const DivContainer = styled.div`
  text-align: center;
`
