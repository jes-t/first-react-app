import React, { useState, useEffect } from 'react'
import { Input } from 'antd'

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState('-')

  const activedEditMode = () => {
    if (props.userId === '13090' || props.userId === undefined) {
      setEditMode(true)
      // setStatus('')
    }
  }

  const deactivedEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }
  useEffect(() => {
    if (props.status !== status) {
      setStatus(status)
    }
  })

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activedEditMode}>{props.status || status}</span>
        </div>
      )}
      {editMode && (
        <Input.TextArea
          onChange={onStatusChange}
          onBlur={deactivedEditMode}
          value={status}
          style={{ width: '300px' }}
          autoSize
          autoFocus
        />
      )}
    </div>
  )
}
