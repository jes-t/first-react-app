import React from 'react'
import { Card, Avatar, Pagination, Spin, Button } from 'antd'
import userPhoto from '../../userLogo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const i18n = {
  total: 'Total users:',
  follow: 'Follow',
  unfollow: 'Unfollow',
}

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
    return `${i18n.total} ${totalUsersCount}`
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
        {i18n.unfollow}
      </Button>
    ) : (
      <Button
        type="dashed"
        disabled={isFetching}
        onClick={() => {
          follow(user.id)
        }}
      >
        {i18n.follow}
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
            <Spin tip="Loading..." size="large" />
          </SpinContainer>
        )}
        <UsersList isFetching={isFetching}>
          {usersArr.map((user) => {
            return (
              <div key={user.id}>
                <Link to={`/profile/${user.id}`}>
                  <Card hoverable style={{ width: 300, marginTop: 16 }}>
                    <Card.Meta
                      avatar={<Avatar size={70} src={renderUserPhoto(user)} />}
                      title={`${user.name}`}
                      description={user.status}
                    />
                  </Card>
                </Link>
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
