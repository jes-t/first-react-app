import React from 'react'
import { Card, Avatar, Button } from 'antd'
import styled from 'styled-components'
import * as axios from 'axios'
import userPhoto from '../../userLogo.png'

export class Users extends React.Component {
  constructor() {
    super()
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items)
      })
  }
  renderSubscribeButton = (user) => {
    return user.followed ? (
      <Button
        type="dashed"
        onClick={() => {
          this.props.unfollow(user.id)
        }}
      >
        Отписаться
      </Button>
    ) : (
      <Button
        type="dashed"
        onClick={() => {
          this.props.follow(user.id)
        }}
      >
        Подписаться
      </Button>
    )
  }
  renderUserPhoto = (user) => {
    return user.photos.small != null ? user.photos.small : userPhoto
  }

  render() {
    return (
      <div>
        {this.props.usersArr.map((user) => {
          return (
            <div>
              <Card style={{ width: 300, marginTop: 16 }} key={user.id}>
                <Card.Meta
                  avatar={<Avatar size={70} src={this.renderUserPhoto(user)} />}
                  title={`${user.name}`}
                  description={user.status}
                />
              </Card>
              <SubscribeButton>
                {this.renderSubscribeButton(user)}
              </SubscribeButton>
            </div>
          )
        })}
      </div>
    )
  }
}
const SubscribeButton = styled.div`
  padding-top: 5px;
`
