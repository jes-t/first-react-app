import { userAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    { id: 0, text: 'Мой первый пост' },
    { id: 1, text: 'Мой второй пост' },
    { id: 2, text: 'Мой третий пост' },
  ],
  profile: null,
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const obj = {
        id: state.length,
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

export const getProfileThunk = (params, setLoading) => {
  return (dispatch) => {
    setLoading(true)
    userAPI
      .getProfile(params)
      .then((response) => {
        dispatch(setUserProfile(response?.data))
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
      })
  }
}
