const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  usersArr: [],
}

export const usersArrReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        usersArr: state.usersArr.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        usersArr: state.usersArr.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        }),
      }
    case SET_USERS:
      return { ...state, usersArr: [...state.usersArr, ...action.users] }

    default:
      return state
  }
}
export const followAC = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollowAC = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => {
  return { type: SET_USERS, users }
}
