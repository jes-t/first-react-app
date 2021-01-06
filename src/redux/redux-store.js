import { createStore, combineReducers, applyMiddleware } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { usersArrReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import ThunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersArrReducer,
  auth: authReducer,
})

export const store = createStore(reducers, applyMiddleware(ThunkMiddleware))

window.store = store
