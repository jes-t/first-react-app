import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { profileReducer } from './profile-reducer'
import { dialogsReducer } from './dialogs-reducer'
import { usersArrReducer } from './users-reducer'
import { authReducer } from './auth-reducer'
import ThunkMiddleware from 'redux-thunk'
import { appReducer } from './app-reducer'

const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  users: usersArrReducer,
  auth: authReducer,
  app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
)

window.__store__ = store
