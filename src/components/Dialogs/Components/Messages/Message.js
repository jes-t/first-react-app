import React from 'react'
import { List } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import styled from 'styled-components'

export const Message = ({ dialog, usersArr }) => {
  return (
    <MessageItem>
      {dialog.messages.map((message) => {
        const fullName = usersArr.filter((element) => {
          if (element.id === message.userId) {
            return element
          }
        })

        return (
          <List.Item.Meta
            avatar={<Avatar src={fullName[0].avatarUrl} />}
            style={{ width: '100%', padding: 10 }}
            title={
              <Title
                firstName={fullName[0].firstName}
                lastName={fullName[0].lastName}
                time={message.time}
              />
            }
            description={<Description message={message.message} />}
          />
        )
      })}
    </MessageItem>
  )
}

const Description = ({ message }) => {
  return (
    <>
      <div>{message}</div>
    </>
  )
}

const Title = ({ firstName, lastName, time }) => {
  return (
    <div>
      <span>{`${firstName} ${lastName}`}</span>
      <span style={{ paddingLeft: 10, fontWeight: 100, fontSize: 12 }}>
        {time}
      </span>
    </div>
  )
}
const MessageItem = styled(List.Item)`
  display: flex;
  flex-direction: column;
  padding: 16px;
`
