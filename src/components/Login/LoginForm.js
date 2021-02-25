import React from 'react'
import { Form, Input, Button, Checkbox, Alert } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import styled from 'styled-components'

export const LoginForm = ({
  postLogin,
  errorMessage,
  setErrorMessage,
  captchaUrl,
}) => {
  const onSubmit = (values) => {
    postLogin(values.email, values.password, values.rememberMe, values.captcha)
  }

  return (
    <>
      {!!errorMessage && (
        <Alert
          message="Error"
          description={errorMessage}
          type="error"
          showIcon
          closable
          afterClose={() => {
            setErrorMessage('')
          }}
        />
      )}

      <StyledForm initialValues={{ remember: true }} onFinish={onSubmit}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
            {
              validator(_, value) {
                const validate = /^([a-z0-9_\.-])+[@][a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i
                if (!value || validate.test(value)) {
                  return Promise.resolve()
                }
                return Promise.reject('Invalid email address')
              },
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Form.Item>

        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && (
          <Form.Item
            name="captcha"
            rules={[{ required: true, message: 'Please input symbols' }]}
          >
            <Input placeholder="Symbols from image" />
          </Form.Item>
        )}

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </StyledForm>
    </>
  )
}
const StyledForm = styled(Form)`
  max-width: 300px;

  .login-form-button {
    width: 100%;
  }
`
