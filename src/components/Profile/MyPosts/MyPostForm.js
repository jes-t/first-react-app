import React, { useState } from 'react'
import { Input, Form, Button } from 'antd'

export const MyPostsForm = ({ addPost }) => {
  const [textInput, setTextInput] = useState('')

  const onEnter = () => {
    addPost(textInput)
    // setTextInput('')
  }
  const onSubmit = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form onFinish={onSubmit}>
      <Form.Item name="addPost" style={{ marginBottom: 7 }}>
        <Input.TextArea
          autoSize
          onChange={(e) => setTextInput(e.target.value)}
          value={textInput}
          style={{ width: '300px' }}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 25 }}>
        <Button onClick={onEnter} type="dashed" htmlType="submit">
          Add Post
        </Button>
      </Form.Item>
    </Form>
  )
}
