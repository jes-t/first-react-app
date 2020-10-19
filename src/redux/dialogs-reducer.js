const NEW_MESSAGE = 'NEW_MESSAGE'

const initialState = {
  dialogs: [
    {
      id: 0,
      firstName: 'Jems',
      lastName: 'Band',
      messages: [
        { data: '26.09.2020', time: '21:00', userId: 0, message: 'gfhdhhd!' },
        {
          data: '26.09.2020',
          time: '21:02',
          userId: 1,
          message: 'gfhdhjd! Как дела?',
        },
        {
          data: '26.09.2020',
          time: '21:05',
          userId: 0,
          message: 'Нормально, а у yefdmkfbs?',
        },
      ],
      avatarUrl:
        'https://sun9-8.userapi.com/o4uD1PeHB2-m8Db3_tPtHnc4MjmDO4Tv4YF4xw/KT8-N1tVDSY.jpg',
    },
    {
      id: 1,
      firstName: 'Nyuta',
      lastName: 'Len',
      messages: [
        { data: '26.09.2020', time: '21:00', userId: 1, message: 'gfyyehb!' },
        {
          data: '26.09.2020',
          time: '21:02',
          userId: 2,
          message: 'Привет! hyFygd дела?',
        },
        {
          data: '26.09.2020',
          time: '21:05',
          userId: 1,
          message: 'Нормально, а у тебя?',
        },
      ],
      avatarUrl:
        'https://sun9-38.userapi.com/s2Q9Sx9JrvmrGNf4VLI3Q1K3PLq7wdgtyP6tpw/MJU6_Gke5xk.jpg',
    },
    {
      id: 2,
      firstName: 'Rob',
      lastName: 'Stark',
      messages: [
        { data: '26.09.2020', time: '21:00', userId: 2, message: 'Привет!' },
        {
          data: '26.09.2020',
          time: '21:02',
          userId: 1,
          message: 'Привет! Как дела?',
        },
        {
          data: '26.09.2020',
          time: '21:05',
          userId: 2,
          message: 'Нормально, а у тебя как?',
        },
      ],
      avatarUrl:
        'https://sun9-25.userapi.com/iygXKWZTY6JJq7MHonu84abE2JNwtvyeVtBH3Q/37ktCVugVA0.jpg',
    },
  ],
}

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE: {
      const newMessage = {
        data: '01.01.2020',
        time: '00:00',
        userId: 2,
        message: action.text,
      }
      state.dialogs[2].messages.push(newMessage)
      break
    }
  }
  return state
}
export const newMessageActionCreator = (text) => ({
  text,
  type: NEW_MESSAGE,
})
