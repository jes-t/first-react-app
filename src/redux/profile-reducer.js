const ADD_POST = 'ADD_POST'

const initialState = {
  posts: [
    { id: 0, text: 'Мой первый пост' },
    { id: 1, text: 'Мой второй пост' },
    { id: 2, text: 'Мой третий пост' },
  ],
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
    default:
      return state
  }
}

export const addPostActionCreator = (text) => ({
  text,
  type: ADD_POST,
})
