export const getUsersArr = (state) => {
  return state.users.usersArr
}
export const getPageSize = (state) => {
  return state.users.pageSize
}
export const getTotalUsersCount = (state) => {
  return state.users.totalUsersCount
}
export const getCurrentPage = (state) => {
  return state.users.currentPage
}
export const getIsFetching = (state) => {
  return state.users.isFetching
}
export const getFollowingInProgress = (state) => {
  return state.users.followingInProgress
}
