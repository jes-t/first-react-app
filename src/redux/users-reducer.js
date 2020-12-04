const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
  usersArr: [
    /*
    {
      id: 0,
      followed: true,
      firstName: 'Jems',
      lastName: 'Band',
      description: "I'm a frontend developer",
      avatarUrl:
        'https://sun9-8.userapi.com/o4uD1PeHB2-m8Db3_tPtHnc4MjmDO4Tv4YF4xw/KT8-N1tVDSY.jpg',
    },
    {
      id: 1,
      followed: false,
      firstName: 'Nyuta',
      lastName: 'Len',
      description: "I'm a backend developer",
      avatarUrl:
        'https://sun9-38.userapi.com/s2Q9Sx9JrvmrGNf4VLI3Q1K3PLq7wdgtyP6tpw/MJU6_Gke5xk.jpg',
    },
    {
      id: 2,
      followed: false,
      firstName: 'Rob',
      lastName: 'Stark',
      description: "I'm a full-stack developer",
      avatarUrl:
        'https://sun9-25.userapi.com/iygXKWZTY6JJq7MHonu84abE2JNwtvyeVtBH3Q/37ktCVugVA0.jpg',
    },*/
  ],
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
