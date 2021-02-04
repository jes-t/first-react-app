import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Alert } from 'antd'
import { isEmpty } from 'ramda'

export const ContactsModal = ({
  modalVisible,
  onSaveContacts,
  onCancel,
  contactsData,
  contactsSaving,
  setErrorMessage,
  errorMessage,
}) => {
  const [form] = Form.useForm()

  const [contactsList, setContactsList] = useState([])

  useEffect(() => {
    if (!isEmpty(contactsData)) {
      setContactsList(
        Object.keys(contactsData).map((key) => {
          return (
            <Form.Item
              name={key}
              key={key}
              // rules={[{ required: true, message: `Please input your ${key}!` }]}
            >
              <Input placeholder={key} disabled={contactsSaving} />
            </Form.Item>
          )
        })
      )
    }
  }, [contactsData, contactsSaving])

  useEffect(() => {
    form.setFieldsValue(contactsData)
  }, [contactsData])

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
      <Modal
        visible={modalVisible}
        title="Contacts"
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              onSaveContacts(values)
            })
            .catch((info) => {
              console.log('Validate Failed:', info)
            })
        }}
        okButtonProps={{ loading: contactsSaving }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={contactsData}
        >
          {contactsList}
        </Form>
      </Modal>
    </>
  )
}
