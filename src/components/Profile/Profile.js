import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import {
  getProfileThunk,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { Spin, Button } from 'antd'
import styled from 'styled-components'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { ProfileData } from './ProfileData'
import { ProfileStatus } from './ProfileStatus'
import userPhoto from '../../userLogo.png'
import { ProfileDataForm } from './ProfileDataForm'
import { ContactsModal } from './ContactsModal'
import { pathOr } from 'ramda'
import { setErrorMessage } from '../../redux/auth-reducer'

const ProfileContainer = ({
  profile,
  status,
  getProfileThunk,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  setErrorMessage,
  errorMessage,
}) => {
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [contactsSaving, setContactsSaving] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const contactsData = pathOr({}, ['contacts'], profile)

  const onSaveContacts = (contacts) => {
    saveProfile({ ...profile, contacts }, setContactsSaving, setEditMode)
  }

  useEffect(() => {
    if (!contactsSaving) {
      setModalVisible(false)
    }
  }, [contactsSaving])

  useEffect(() => {
    getProfileThunk(params, setLoading)
    getUserStatus(params.id || 13090)
  }, [params])

  if (loading) {
    return (
      <SpinContainer>
        <Spin tip="Loading..." size="large" />
      </SpinContainer>
    )
  }

  const isOwner = params.id === '13090' || params.id === undefined
  const onMainPhotosSelector = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div>
        <img src={profile?.photos?.small || userPhoto} />
        {isOwner && <input type={'file'} onChange={onMainPhotosSelector} />}
      </div>
      <ProfileStatus
        status={status}
        updateStatus={updateStatus}
        userId={params.id}
      />
      {editMode ? (
        <ProfileDataForm
          profile={profile}
          saveProfile={saveProfile}
          setEditMode={setEditMode}
        />
      ) : (
        <ProfileData
          profile={profile}
          isOwner={isOwner}
          goToEditMode={() => {
            setEditMode(true)
          }}
        />
      )}
      <div>
        <Button
          type="primary"
          onClick={() => {
            setModalVisible(true)
          }}
        >
          Contacts
        </Button>
        <ContactsModal
          modalVisible={modalVisible}
          contactsSaving={contactsSaving}
          onSaveContacts={onSaveContacts}
          contactsData={contactsData}
          onCancel={() => {
            setModalVisible(false)
          }}
          setErrorMessage={setErrorMessage}
          errorMessage={errorMessage}
        />
      </div>
      <h1>My Post</h1>
      <MyPostsContainer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    errorMessage: state.auth.errorMessage,
  }
}
const mapDispatchToProps = {
  getProfileThunk,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  setErrorMessage,
}

export const Profile = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(ProfileContainer)

const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
