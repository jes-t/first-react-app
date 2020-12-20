import React from 'react'
import { Card, Avatar, Pagination, Spin, Button } from 'antd'
import userPhoto from '../../userLogo.png'
import styled from 'styled-components'

export const Users = ({
  usersArr,
  pageSize,
  totalUsersCount,
  onPageChanged,
  isFetching,
  follow,
  unfollow,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  const showTotal = () => {
    return `Всего ${totalUsersCount} пользователей`
  }

  const renderSubscribeButton = (user) => {
    return user.followed ? (
      <Button
        type="dashed"
        disabled={isFetching}
        onClick={() => {
          unfollow(user.id)
        }}
      >
        Отписаться
      </Button>
    ) : (
      <Button
        type="dashed"
        disabled={isFetching}
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
    <RootContainer>
      <Pagination
        defaultCurrent={1}
        total={pageCount}
        pageSizeOptions={[]}
        onChange={onPageChanged}
        showTotal={showTotal}
        showSizeChanger={false}
      />
      <UsersListContainer>
        {isFetching && (
          <SpinContainer>
            <Spin tip="Loading..." size="large" />{' '}
          </SpinContainer>
        )}
        <UsersList isFetching={isFetching}>
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
        </UsersList>
      </UsersListContainer>
    </RootContainer>
  )
}
const SubscribeButton = styled.div`
  padding-top: 5px;
`
const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
const RootContainer = styled.div``
const UsersListContainer = styled.div`
  position: relative;
`
const UsersList = styled.div`
  opacity: ${(props) => (props.isFetching ? 0.5 : 1)};
`
