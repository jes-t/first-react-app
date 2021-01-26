import { getAuth } from './auth-reducer'

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES'

const initialState = {
  initialized: false,
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const initializedSacces = () => {
  return { type: INITIALIZED_SUCCES }
}

export const initializeApp = () => (dispatch) => {
  const promise = dispatch(getAuth())
  Promise.all([promise]).then(() => {
    dispatch(initializedSacces())
  })
}
