import React from 'react'
import { newMessageActionCreator } from '../../redux/dialogs-reducer'
import { Dialogs } from './Dialogs'
import { StoreContext } from '../../StoreContext'

export const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  )
}
