import React from 'react'
import { Card, Avatar, Pagination, Button, List } from 'antd'
import userPhoto from '../../userLogo.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { userAPI } from '../../api/api'

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
  followingInProgress,
  toggleFollowingProgress,
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
        disabled={
          isFetching || followingInProgress.some((id) => id === user.id)
        }
        onClick={() => {
          toggleFollowingProgress(true, user.id)
          userAPI.deleteFollow(user).then((data) => {
            if (data.resultCode === 0) {
              unfollow(user.id)
            }
            toggleFollowingProgress(false, user.id)
          })
        }}
      >
        {i18n.unfollow}
      </Button>
    ) : (
      <Button
        type="dashed"
        disabled={
          isFetching || followingInProgress.some((id) => id === user.id)
        }
        onClick={() => {
          toggleFollowingProgress(true, user.id)
          userAPI.postFollow(user).then((data) => {
            if (data.resultCode === 0) {
              follow(user.id)
            }
            toggleFollowingProgress(false, user.id)
          })
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
        <List
          dataSource={usersArr}
          loading={isFetching}
          renderItem={(user) => (
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
          )}
        />
      </UsersListContainer>
    </RootContainer>
  )
}
const SubscribeButton = styled.div`
  padding-top: 5px;
`
const RootContainer = styled.div``
const UsersListContainer = styled.div`
  overflow: auto;
  height: 70vh;
`
