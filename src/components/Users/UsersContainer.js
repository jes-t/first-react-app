import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  setCurrentPage,
  getUsers,
  followThunk,
  unfollowThunk,
} from '../../redux/users-reducer'
import { Users } from './Users'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

export const UsersAPIComponent = ({
  usersArr,
  pageSize,
  setCurrentPage,
  totalUsersCount,
  currentPage,
  isFetching,
  followingInProgress,
  getUsers,
  followThunk,
  unfollowThunk,
}) => {
  useEffect(() => {
    if (usersArr.length === 0) {
      getUsers(currentPage, pageSize)
    }
  }, [])
  const onPageChanged = (pageNumber) => {
    getUsers(pageNumber, pageSize)
  }

  return (
    <Users
      usersArr={usersArr}
      pageSize={pageSize}
      totalUsersCount={totalUsersCount}
      onPageChanged={onPageChanged}
      isFetching={isFetching}
      followingInProgress={followingInProgress}
      followThunk={followThunk}
      unfollowThunk={unfollowThunk}
    />
  )
}

const AuthRedirectComponent = withAuthRedirect(UsersAPIComponent)

const mapStateToProps = (state) => {
  return {
    usersArr: state.users.usersArr,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress,
  }
}
const mapDispatchToProps = {
  setCurrentPage,
  getUsers,
  followThunk,
  unfollowThunk,
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)
