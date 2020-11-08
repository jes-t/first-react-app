import { Users } from './Users'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return { usersArr: state.users.usersArr }
}
const mapDispatchToProps = {}

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
