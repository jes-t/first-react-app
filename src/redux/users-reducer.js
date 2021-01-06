import { userAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initialState = {
  usersArr: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
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
      return { ...state, usersArr: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      }

    default:
      return state
  }
}
export const follow = (userId) => {
  return { type: FOLLOW, userId }
}
export const unfollow = (userId) => {
  return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
  return { type: SET_USERS, users }
}
export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage }
}
export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }
}
export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }
}

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
    userAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}
export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userAPI.postFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}
export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userAPI.deleteFollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}
