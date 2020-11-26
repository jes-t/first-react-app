import { createStore, combineReducers } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { usersArrReducer } from './users-reducer'

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersArrReducer,
})

export const store = createStore(reducers)

window.store = store
