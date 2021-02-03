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
  postFollow(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .catch((error) => {
        console.log(error)
      })
      .then((response) => response.data)
  },
  deleteFollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .catch((error) => {
        console.log(error)
      })
      .then((response) => response.data)
  },
}
export const profileAPI = {
  getProfile(params) {
    return instance.get(`profile/${params.id ? params.id : 13090}`)
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status })
  },
  savePhoto(photoFile) {
    const formData = new FormData()
    formData.append('image', photoFile)

    return instance.put(`profile/photo`, formData)
  },
}
export const authAPI = {
  getAuthMe() {
    return instance.get(`auth/me`).then((response) => response.data)
  },
  postLogin(email, password, rememberMe = false) {
    return instance.post('auth/login', { email, password, rememberMe })
  },
  deleteLogout() {
    return instance.delete('auth/login')
  },
}
