import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export const setAuthUserData = (id, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { id, login, email, isAuth } }
}

export const getAuth = () => (dispatch) => {
  authAPI.getAuthMe().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data
      dispatch(setAuthUserData(id, login, email, true))
    }
  })
}

export const postLogin = (email, password, rememberMe) => (dispatch) => {
  authAPI.postLogin(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(getAuth())
    }
  })
}

export const deleteLogout = () => (dispatch) => {
  authAPI.deleteLogout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  })
}
