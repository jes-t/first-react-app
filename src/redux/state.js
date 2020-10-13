export const store = {
  _state: {
    posts: [
      { id: 0, text: "Мой первый пост" },
      { id: 1, text: "Мой второй пост" },
      { id: 2, text: "Мой третий пост" },
    ],
    dialogs: [
      {
        id: 0,
        firstName: "Jems",
        lastName: "Band",
        messages: [
          { data: "26.09.2020", time: "21:00", userId: 0, message: "gfhdhhd!" },
          {
            data: "26.09.2020",
            time: "21:02",
            userId: 1,
            message: "gfhdhjd! Как дела?",
          },
          {
            data: "26.09.2020",
            time: "21:05",
            userId: 0,
            message: "Нормально, а у yefdmkfbs?",
          },
        ],
        avatarUrl:
          "https://sun9-8.userapi.com/o4uD1PeHB2-m8Db3_tPtHnc4MjmDO4Tv4YF4xw/KT8-N1tVDSY.jpg",
      },
      {
        id: 1,
        firstName: "Nyuta",
        lastName: "Len",
        messages: [
          { data: "26.09.2020", time: "21:00", userId: 1, message: "gfyyehb!" },
          {
            data: "26.09.2020",
            time: "21:02",
            userId: 2,
            message: "Привет! hyFygd дела?",
          },
          {
            data: "26.09.2020",
            time: "21:05",
            userId: 1,
            message: "Нормально, а у тебя?",
          },
        ],
        avatarUrl:
          "https://sun9-38.userapi.com/s2Q9Sx9JrvmrGNf4VLI3Q1K3PLq7wdgtyP6tpw/MJU6_Gke5xk.jpg",
      },
      {
        id: 2,
        firstName: "Rob",
        lastName: "Stark",
        messages: [
          { data: "26.09.2020", time: "21:00", userId: 2, message: "Привет!" },
          {
            data: "26.09.2020",
            time: "21:02",
            userId: 1,
            message: "Привет! Как дела?",
          },
          {
            data: "26.09.2020",
            time: "21:05",
            userId: 2,
            message: "Нормально, а у тебя как?",
          },
        ],
        avatarUrl:
          "https://sun9-25.userapi.com/iygXKWZTY6JJq7MHonu84abE2JNwtvyeVtBH3Q/37ktCVugVA0.jpg",
      },
    ],
    usersArr: [
      {
        id: 0,
        firstName: "Jems",
        lastName: "Band",
        description: "I'm a frontend developer",
        avatarUrl:
          "https://sun9-8.userapi.com/o4uD1PeHB2-m8Db3_tPtHnc4MjmDO4Tv4YF4xw/KT8-N1tVDSY.jpg",
      },
      {
        id: 1,
        firstName: "Nyuta",
        lastName: "Len",
        description: "I'm a backend developer",
        avatarUrl:
          "https://sun9-38.userapi.com/s2Q9Sx9JrvmrGNf4VLI3Q1K3PLq7wdgtyP6tpw/MJU6_Gke5xk.jpg",
      },
      {
        id: 2,
        firstName: "Rob",
        lastName: "Stark",
        description: "I'm a full-stack developer",
        avatarUrl:
          "https://sun9-25.userapi.com/iygXKWZTY6JJq7MHonu84abE2JNwtvyeVtBH3Q/37ktCVugVA0.jpg",
      },
    ],
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    
    switch (action.type) {
      case "ADD-POST": {
        const obj = {
          id: this._state.posts.length,
          text: action.text,
        };
        debugger;
        this._state.posts.push(obj);
        this._callSubscriber(this._state);
        break;
      }
    }
  },
};
