import React from 'react'
import { Card, Avatar, Button } from 'antd'
import styled from 'styled-components'

export const Users = ({ usersArr, follow, unfollow, setUsers }) => {
  if (usersArr.length === 0) {
    setUsers([
      {
        id: 0,
        followed: true,
        firstName: 'Jems',
        lastName: 'Band',
        description: "I'm a frontend developer",
        avatarUrl:
          'https://sun9-8.userapi.com/o4uD1PeHB2-m8Db3_tPtHnc4MjmDO4Tv4YF4xw/KT8-N1tVDSY.jpg',
      },
      {
        id: 1,
        followed: false,
        firstName: 'Nyuta',
        lastName: 'Len',
        description: "I'm a backend developer",
        avatarUrl:
          'https://sun9-38.userapi.com/s2Q9Sx9JrvmrGNf4VLI3Q1K3PLq7wdgtyP6tpw/MJU6_Gke5xk.jpg',
      },
      {
        id: 2,
        followed: false,
        firstName: 'Rob',
        lastName: 'Stark',
        description: "I'm a full-stack developer",
        avatarUrl:
          'https://sun9-25.userapi.com/iygXKWZTY6JJq7MHonu84abE2JNwtvyeVtBH3Q/37ktCVugVA0.jpg',
      },
    ])
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
  console.log(usersArr)

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
