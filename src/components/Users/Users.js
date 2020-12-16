import React, { useEffect } from 'react'
import { Card, Avatar, Button } from 'antd'
import styled from 'styled-components'
import * as axios from 'axios'
import userPhoto from '../../userLogo.png'

export const Users = ({ usersArr, follow, unfollow, setUsers }) => {
  useEffect(() => {
    if (usersArr.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => {
          setUsers(response.data.items)
        })
    }
  }, [])

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
  const renderUserPhoto = (user) => {
    return user.photos.small != null ? user.photos.small : userPhoto
  }

  return (
    <div>
      {usersArr.map((user) => {
        return (
          <div>
            <Card style={{ width: 300, marginTop: 16 }} key={user.id}>
              <Card.Meta
                avatar={<Avatar size={70} src={renderUserPhoto(user)} />}
                title={`${user.name}`}
                description={user.status}
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
