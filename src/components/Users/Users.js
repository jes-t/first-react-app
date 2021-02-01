import React from 'react'
import { Pagination } from 'antd'
import styled from 'styled-components'
import { User } from './User'

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
  followingInProgress,
  followThunk,
  unfollowThunk,
}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  const showTotal = () => {
    return `${i18n.total} ${totalUsersCount}`
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
      <User
        usersArr={usersArr}
        isFetching={isFetching}
        followingInProgress={followingInProgress}
        followThunk={followThunk}
        unfollowThunk={unfollowThunk}
      />
    </RootContainer>
  )
}

const RootContainer = styled.div``
