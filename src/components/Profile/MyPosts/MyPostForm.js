import React from 'react'
import { Input, Form, Button } from 'antd'
import { requiredField, maxLengthCreator } from '../../../helpers/validators'

export const MyPostsForm = ({ addPost }) => {
  const [form] = Form.useForm()

  const onSubmit = (values) => {
    addPost(values.textInput)
    form.setFieldsValue({
      textInput: '',
    })
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
      <Form.Item style={{ marginBottom: 25 }} shouldUpdate>
        {() => (
          <Button
            type="dashed"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Add Post
          </Button>
        )}
      </Form.Item>
    </Form>
  )
}
