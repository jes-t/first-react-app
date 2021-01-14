import React, { useState } from 'react'
import { Input, Spin } from 'antd'
import styled from 'styled-components'

const i18n = { statusPlaceholder: 'Your status' }

export const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props?.status)
  const [loading, setLoading] = useState(false)

  const handleDoubleClick = () => {
    if (props.userId === '13090' || props.userId === undefined) {
      setEditMode(true)
    }
  }

  const handleInputBlur = () => {
    setEditMode(false)
    if (props.status !== status) {
      props.updateStatus(status, setLoading)
    }
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <StyleContainer>
      {editMode ? (
        <Input
          onChange={onStatusChange}
          onBlur={handleInputBlur}
          value={status}
          style={{ width: '300px' }}
          autoFocus
          placeholder={'Status'}
        />
      ) : (
        <div>
          {loading ? (
            <Spin />
          ) : (
            <span
              onDoubleClick={handleDoubleClick}
              style={{ opacity: props.status ? 1 : 0.3, paddingLeft: '12px' }}
            >
              {status || i18n.statusPlaceholder}
            </span>
          )}
        </div>
      )}
    </StyleContainer>
  )
}

const StyleContainer = styled.div`
  height: 40px;
  align-items: center;
  display: flex;
`
