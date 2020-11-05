import React from 'react'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'

export const MyPostsContainer = ({ store }) => {
  const addPost = (text) => {
    store.dispatch(addPostActionCreator(text))
  }

  return <MyPosts posts={store.getState().profile.posts} addPost={addPost} />
}
