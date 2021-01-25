import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  errorMessage: '',
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      }
    case SET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      }
    default:
      return state
  }
}

export const setAuthUserData = (id, login, email, isAuth) => {
  return { type: SET_USER_DATA, data: { id, login, email, isAuth } }
}
export const setErrorMessage = (errorMessage) => {
  return { type: SET_ERROR, errorMessage }
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
    } else {
      // console.log(response.data.messages[0])
      dispatch(setErrorMessage(response.data.messages[0]))
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
