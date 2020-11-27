import React from 'react'
import { Card, Avatar, Button } from 'antd'
import styled from 'styled-components'

export const Users = ({ usersArr, follow, unfollow, setUsers }) => {
  if (usersArr.lenght === 0) {
    setUsers()
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
            {user.followed ? (
              <Buttons
                type="dashed"
                onClick={() => {
                  unfollow(user.id)
                }}
              >
                Отписаться
              </Buttons>
            ) : (
              <Buttons
                type="dashed"
                onClick={() => {
                  follow(user.id)
                }}
              >
                Подписаться
              </Buttons>
            )}
          </div>
        )
      })}
    </div>
  )
}
const Buttons = styled(Button)`
  margin-top: 5px;
`
