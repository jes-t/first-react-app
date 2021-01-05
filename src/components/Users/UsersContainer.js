import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
} from '../../redux/users-reducer'
import * as axios from 'axios'
import { Users } from './Users'

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
  isFetching,
  toggleIsFetching,
}) => {
  useEffect(() => {
    if (usersArr.length === 0) {
      toggleIsFetching(true)
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
          { withCredentials: true }
        )
        .catch((error) => {
          console.log(error)
        })
        .then((response) => {
          toggleIsFetching(false)
          setUsers(response.data.items)
          setTotalUsersCount(response.data.totalCount)
        })
    }
  }, [])
  const onPageChanged = (pageNumber) => {
    toggleIsFetching(true)
    setCurrentPage(pageNumber)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`,
        { withCredentials: true }
      )
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        toggleIsFetching(false)
        setUsers(response.data.items)
      })
  }

  return (
    <Users
      usersArr={usersArr}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      onPageChanged={onPageChanged}
      isFetching={isFetching}
      follow={follow}
      unfollow={unfollow}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    usersArr: state.users.usersArr,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
  }
}
const mapDispatchToProps = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalUsersCountAC,
  toggleIsFetching: toggleIsFetchingAC,
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent)
