import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers, followThunk, unfollowThunk } from '../../redux/users-reducer'
import { Users } from './Users'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import {
  getUsersArr,
  getPageSize,
  getTotalUsersCount,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from '../../redux/users-selectors'

const UsersAPIComponent = ({
  usersArr,
  pageSize,
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

const mapStateToProps = (state) => {
  return {
    usersArr: getUsersArr(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}
const mapDispatchToProps = {
  getUsers,
  followThunk,
  unfollowThunk,
}

const UsersContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(UsersAPIComponent)

export default UsersContainer
