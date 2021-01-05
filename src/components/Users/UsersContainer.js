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
import { Users } from './Users'
import { userAPI } from '../../api/api'

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
      userAPI.getUsers(currentPage, pageSize).then((data) => {
        toggleIsFetching(false)
        setUsers(data.items)
        setTotalUsersCount(data.totalCount)
      })
    }
  }, [])
  const onPageChanged = (pageNumber) => {
    toggleIsFetching(true)
    setCurrentPage(pageNumber)
    userAPI.getUsers(pageNumber, pageSize).then((data) => {
      toggleIsFetching(false)
      setUsers(data.items)
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
