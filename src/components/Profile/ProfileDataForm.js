import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import styled from 'styled-components'

export const ProfileDataForm = ({ profile, saveProfile, setEditMode }) => {
  const [loading, setLoading] = useState(false)

  const onSubmit = (formData) => {
    saveProfile(formData, setLoading, setEditMode)
  }

  return (
    <StyledForm initialValues={profile} onFinish={onSubmit}>
      <div>
        <b>Full name:</b>
        <Form.Item name="fullName">
          <Input placeholder="Full name" />
        </Form.Item>
      </div>
      <div>
        <b>About me:</b>
        <Form.Item name="aboutMe">
          <Input placeholder="About Me" />
        </Form.Item>
      </div>
      <div>
        <b>Looking for a job:</b>
        <Form.Item name="lookingForAJob" valuePropName="checked" noStyle>
          <Checkbox />
        </Form.Item>
      </div>
      <div>
        <b>My professionals skills:</b>
        <Form.Item name="lookingForAJobDescription">
          <Input placeholder="My professionals skills" />
        </Form.Item>
      </div>
      <div>
        <Button type="primary" htmlType="submit" loading={loading}>
          Save
        </Button>
      </div>
    </StyledForm>
  )
}

const StyledForm = styled(Form)`
  max-width: 300px;

  .login-form-button {
    width: 100%;
  }
`
