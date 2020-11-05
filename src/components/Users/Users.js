import React, { useContext } from 'react'
import { Card, Avatar } from 'antd'
import { StoreContext } from '../../StoreContext'

export const Users = () => {
  const store = useContext(StoreContext)

  return (
    <div>
      {store.getState().users.usersArr.map((user) => {
        return (
          <Card style={{ width: 300, marginTop: 16 }} key={user.id}>
            <Card.Meta
              avatar={<Avatar size={70} src={user.avatarUrl} />}
              title={`${user.firstName} ${user.lastName}`}
              description={user.description}
            />
          </Card>
        )
      })}
    </div>
  )
}
