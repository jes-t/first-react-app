import { userAPI } from '../api/api'

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
        isAuth: true,
      }
    default:
      return state
  }
}

export const setAuthUserData = ({ id, email, login }) => {
  return { type: SET_USER_DATA, data: { id, email, login } }
}

export const getAuth = () => {
  return (dispatch) => {
    userAPI.getAuthMe().then((data) => {
      if (data.resultCode === 0) {
        const { id, email, login } = data.data
        dispatch(setAuthUserData({ id, login, email }))
      }
    })
  }
}
