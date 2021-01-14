import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import logo from '../../logo.png'
import {
  getProfileThunk,
  getUserStatus,
  updateStatus,
} from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import styled from 'styled-components'
//import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { ProfileStatus } from './ProfileStatus'

const ProfileContainer = ({
  profile,
  status,
  getProfileThunk,
  getUserStatus,
  updateStatus,
}) => {
  const params = useParams()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProfileThunk(params, setLoading)
    getUserStatus(params.id || 13090)
  }, [])
  if (loading) {
    return (
      <SpinContainer>
        <Spin tip="Loading..." size="large" />
      </SpinContainer>
    )
  }

  return (
    <div>
      <div>
        <h1>{profile ? profile.fullName : 'Users name'} </h1>
        {`About me: ${profile?.aboutMe}`}
        <div>
          <img src={profile?.photos?.small} />
        </div>
        <ProfileStatus
          status={status}
          updateStatus={updateStatus}
          userId={params.id}
        />
      </div>
      {/* <img src={logo} /> */}
      <h1>My Post</h1>
      <MyPostsContainer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
  }
}
const mapDispatchToProps = {
  getProfileThunk,
  getUserStatus,
  updateStatus,
}

export const Profile = compose(
  connect(mapStateToProps, mapDispatchToProps)
  //withAuthRedirect
)(ProfileContainer)

const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
