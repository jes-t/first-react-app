import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd'

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      <div>
        <h1>
          <b>{profile ? profile.fullName : 'Users name'}</b>
        </h1>
      </div>

      <div>
        <b>About me:</b> {profile?.aboutMe}
      </div>
      <div>
        <b>Looking for a job:</b> {profile?.lookingForAJob ? 'Yes' : 'No'}
      </div>
      {profile?.lookingForAJob && (
        <div>
          <b>My professionals skills:</b>
          {profile?.lookingForAJobDescription}
        </div>
      )}
      <div>{isOwner && <Button onClick={goToEditMode}>Edit</Button>}</div>
    </div>
  )
}
