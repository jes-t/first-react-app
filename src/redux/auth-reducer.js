import { authAPI, securityAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  errorMessage: '',
  captchaUrl: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
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
  return { type: SET_USER_DATA, payload: { id, login, email, isAuth } }
}
export const setErrorMessage = (errorMessage) => {
  return { type: SET_ERROR, errorMessage }
}
export const getCaptchaUrlSuccess = (captchaUrl) => {
  return { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } }
}

export const getAuth = () => async (dispatch) => {
  const data = await authAPI.getAuthMe()
  if (data.resultCode === 0) {
    const { id, login, email } = data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const postLogin = (email, password, rememberMe, captcha) => async (
  dispatch
) => {
  const response = await authAPI.postLogin(email, password, rememberMe, captcha)
  if (response.data.resultCode === 0) {
    dispatch(getAuth())
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl())
    }
    dispatch(setErrorMessage(response.data.messages[0]))
  }
}
export const getCaptchaUrl = () => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl()
  const captchaUrl = response.data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const deleteLogout = () => async (dispatch) => {
  const response = await authAPI.deleteLogout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}
