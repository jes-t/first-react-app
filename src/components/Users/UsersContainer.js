import { Users } from './Users'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from '../../redux/users-reducer'

const mapStateToProps = (state) => {
  return { usersArr: state.users.usersArr }
}
const mapDispatchToProps = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
