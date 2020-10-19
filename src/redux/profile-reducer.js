const ADD_POST = "ADD_POST";

export const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      const obj = {
        id: state.length,
        text: action.text,
      };
      state.push(obj);
      break;
    }
  }
  return state;
};

export const addPostActionCreator = (text) => ({
  text,
  type: ADD_POST,
});
