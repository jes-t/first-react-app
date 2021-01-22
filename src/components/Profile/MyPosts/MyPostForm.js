import React, { useState } from 'react'
import { Input, Form, Button } from 'antd'
import { requiredField, maxLengthCreator } from '../../../helpers/validators'

export const MyPostsForm = ({ addPost }) => {
  const [textInput, setTextInput] = useState('')
  const [isDisableButton, setIsDisableButton] = useState(true)
  const [form] = Form.useForm()

  const onEnter = () => {
    addPost(textInput)
    // setTextInput('')
  }
  const onSubmit = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <Form onFinish={onSubmit} form={form}>
      <Form.Item
        name="textInput"
        style={{ marginBottom: 7 }}
        rules={[
          {
            pattern: '^[A-Za-z!.?, ]*$',
            message: 'Use only latin symbols',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('textInput').length <= 5) {
                return Promise.resolve()
              }
              return Promise.reject('Max length is 5 simbols!')
            },
          }),
        ]}
      >
        <Input.TextArea
          autoSize
          onChange={(e) => {
            if (!/^[A-Za-z!.?, ]*$/.test(e.currentTarget.value)) {
              form.setFieldsValue({
                textInput: e.currentTarget.value.slice(0, -1),
              })
              form.validateFields()
            }
          }}
          style={{ width: '300px' }}
        />
      </Form.Item>
      <Form.Item style={{ marginBottom: 25 }}>
        <Button
          onClick={onEnter}
          type="dashed"
          htmlType="submit"
          disabled={isDisableButton}
        >
          Add Post
        </Button>
      </Form.Item>
    </Form>
  )
}
