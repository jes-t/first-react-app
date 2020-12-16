import { Users } from './Users'
import { connect } from 'react-redux'
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
} from '../../redux/users-reducer'

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
)(Users)
