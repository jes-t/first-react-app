import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/users-reducer'
import * as axios from 'axios'
import { Users } from './Users'
import { Button } from 'antd'
import userPhoto from '../../userLogo.png'

export const UsersAPIComponent = ({
  usersArr,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  pageSize,
  totalUsersCount,
  currentPage,
  setTotalUsersCount,
}) => {
  useEffect(() => {
    if (usersArr.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
        )
        .then((response) => {
          setUsers(response.data.items)
          setTotalUsersCount(response.data.totalCount)
        })
    }
  }, [])
  const onPageChanged = (pageNumber) => {
    setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`
      )
      .then((response) => {
        setUsers(response.data.items)
      })
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
  const renderUserPhoto = (user) => {
    return user.photos.small != null ? user.photos.small : userPhoto
  }

  return (
    <Users
      usersArr={usersArr}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      onPageChanged={onPageChanged}
      renderSubscribeButton={renderSubscribeButton}
      renderUserPhoto={renderUserPhoto}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    usersArr: state.users.usersArr,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  }
}
const mapDispatchToProps = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent)
