import React, { useContext } from 'react'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { StoreContext } from '../../../StoreContext'

export const MyPostsContainer = () => {
  const store = useContext(StoreContext)

  const addPost = (text) => {
    store.dispatch(addPostActionCreator(text))
  }
  return <MyPosts posts={store.getState().profile.posts} addPost={addPost} />
}
