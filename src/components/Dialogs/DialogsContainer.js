import { newMessageActionCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'

import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs.dialogs,
    usersArr: state.users.usersArr,
  }
}

const mapDispatchToProps = { addMessage: newMessageActionCreator }

export const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)
