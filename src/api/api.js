import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'ed4a67f8-9eef-4f4c-86ad-a0230918bd68',
  },
})

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .catch((error) => {
        console.log(error)
      })
      .then((response) => response.data)
  },
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data)
  },
  postFollow(user) {
    return instance
      .post(`follow/${user.id}`, {})
      .catch((error) => {
        console.log(error)
      })
      .then((response) => response.data)
  },
  deleteFollow(user) {
    return instance
      .delete(`follow/${user.id}`)
      .catch((error) => {
        console.log(error)
      })
      .then((response) => response.data)
  },
}
