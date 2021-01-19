import React from 'react'
import { Post } from './Post'
import { MyPostsForm } from './MyPostForm'
import styled from 'styled-components'

export const MyPosts = ({ addPost, posts }) => {
  return (
    <div>
      <MyPostsForm addPost={addPost} />
      <Container>
        {posts.map((item) => {
          return <Post postText={item.text} key={item.id} />
        })}
      </Container>
    </div>
  )
}
const Container = styled.div`
  max-width: 300px;
  border: 2px solid palevioletred;
`
