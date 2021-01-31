import { profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  posts: [
    { id: 0, text: 'Мой первый пост' },
    { id: 1, text: 'Мой второй пост' },
    { id: 2, text: 'Мой третий пост' },
  ],
  profile: null,
  status: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const obj = {
        id: state.posts.length,
        text: action.text,
      }
      return {
        ...state,
        posts: [...state.posts, obj],
      }
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile }
    }
    case SET_STATUS: {
      return { ...state, status: action.status }
    }
    default:
      return state
  }
}

export const addPostActionCreator = (text) => ({
  text,
  type: ADD_POST,
})
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  }
}

export const getProfileThunk = (params, setLoading) => async (dispatch) => {
  setLoading(true)
  try {
    const response = await profileAPI.getProfile(params)
    dispatch(setUserProfile(response?.data))
    setLoading(false)
  } catch (error) {
    setLoading(false)
  }
}

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status, setLoading) => async (dispatch) => {
  setLoading(true)
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
    setLoading(false)
  }
}
