import React from 'react'
import { newMessageActionCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'

export const DialogsContainer = ({ store }) => {
  const addMessage = (text) => {
    store.dispatch(newMessageActionCreator(text))
  }

  return (
    <Dialogs
      addMessage={addMessage}
      dialogs={store.getState().dialogs.dialogs}
      usersArr={store.getState().users.usersArr}
    />
  )
}
