import React from 'react'
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { StoreContext } from '../../../StoreContext'

export const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = (text) => {
          store.dispatch(addPostActionCreator(text))
        }
        return (
          <MyPosts posts={store.getState().profile.posts} addPost={addPost} />
        )
      }}
    </StoreContext.Consumer>
  )
}
