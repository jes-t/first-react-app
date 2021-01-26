import { newMessageActionCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    usersArr: state.users.usersArr,
  }
}

const mapDispatchToProps = { addMessage: newMessageActionCreator }

export const DialogsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
