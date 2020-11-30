import React from 'react'
import { Card, Avatar, Button } from 'antd'
import styled from 'styled-components'

export const Users = ({ usersArr, follow, unfollow, setUsers }) => {
  if (usersArr.lenght === 0) {
    setUsers()
  }
  const renderSubscribeButton = (user) => {
    return user.followed ? (
      <Button
        type="dashed"
        onClick={() => {
          unfollow(user.id)
        }}
      >
        Отписаться
      </Button>
    ) : (
      <Button
        type="dashed"
        onClick={() => {
          follow(user.id)
        }}
      >
        Подписаться
      </Button>
    )
  }

  return (
    <div>
      {usersArr.map((user) => {
        return (
          <div>
            <Card style={{ width: 300, marginTop: 16 }} key={user.id}>
              <Card.Meta
                avatar={<Avatar size={70} src={user.avatarUrl} />}
                title={`${user.firstName} ${user.lastName}`}
                description={user.description}
              />
            </Card>
            <SubscribeButton>{renderSubscribeButton(user)}</SubscribeButton>
          </div>
        )
      })}
    </div>
  )
}
const SubscribeButton = styled.div`
  padding-top: 5px;
`
