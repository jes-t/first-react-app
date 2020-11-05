import React, { useContext } from 'react'
import { newMessageActionCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { StoreContext } from '../../StoreContext'

export const DialogsContainer = () => {
  const store = useContext(StoreContext)

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
