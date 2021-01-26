import { getAuth } from './auth-reducer'

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

const initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const initializedSuccess = () => {
  return { type: INITIALIZED_SUCCESS }
}

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuth())
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess())
  })
}
