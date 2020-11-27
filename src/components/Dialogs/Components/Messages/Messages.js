import React from 'react'
import { List } from 'antd'
import { Message } from './Message'
import styled from 'styled-components'

export const Messages = ({ dialogs, usersArr }) => {
  return (
    <MessagesList
      dataSource={dialogs}
      renderItem={(item) => <Message dialog={item} usersArr={usersArr} />}
    />
  )
}

const MessagesList = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
