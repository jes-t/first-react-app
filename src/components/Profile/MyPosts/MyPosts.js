import React, { useState } from 'react'
import { Post } from './Post'
import { Input } from 'antd'

export const MyPosts = ({ addPost, posts }) => {
  const [textInput, setTextInput] = useState('')

  const onEnter = () => {
    addPost(textInput)
    setTextInput('')
  }

  return (
    <div>
      <div>
        <Input.TextArea
          autoSize
          onPressEnter={onEnter}
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
          style={{ width: '300px' }}
        />
      </div>
      <div>
        {posts.map((item) => {
          return <Post postText={item.text} key={item.id} />
        })}
      </div>
    </div>
  )
}
