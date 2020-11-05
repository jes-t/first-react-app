import React, { useState } from 'react'
import { Companions } from './Components/Companions/Companions'
import { Messages } from './Components/Messages/Messages'
import { Input } from 'antd'
import styled from 'styled-components'

export const Dialogs = ({ addMessage, dialogs, usersArr }) => {
  const [textMessage, setTextMessage] = useState('')

  const onEnter = () => {
    addMessage(textMessage)
    setTextMessage('')
  }

  return (
    <MainContainer>
      <Companions dialogs={dialogs} />
      <Content>
        <Messages dialogs={dialogs} usersArr={usersArr} />
        <Input.TextArea
          autoSize
          onPressEnter={onEnter}
          onChange={(e) => setTextMessage(e.target.value)}
          value={textMessage}
          style={{ width: '300px' }}
        />
      </Content>
    </MainContainer>
  )
}
const MainContainer = styled.div`
  display: flex;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
