import React from 'react'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import logo from '../../logo.png'

export const Profile = ({ store }) => {
  return (
    <div>
      <img src={logo} />
      <h1>Profile</h1>
      <MyPostsContainer store={store} />
    </div>
  )
}
