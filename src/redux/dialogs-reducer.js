const NEW_MESSAGE = "NEW_MESSAGE";

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE: {
      const newMessage = {
        data: "01.01.2020",
        time: "00:00",
        userId: 2,
        message: action.text,
      };
      state.dialogs[2].messages.push(newMessage);
      break;
    }
  }
  return state;
};
export const newMessageActionCreator = (text) => ({
  text,
  type: NEW_MESSAGE,
});
