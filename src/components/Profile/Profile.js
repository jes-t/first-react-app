import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import logo from '../../logo.png'
import { getProfileThunk } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import styled from 'styled-components'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

const ProfileContainer = ({ profile, getProfileThunk }) => {
  const params = useParams()

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getProfileThunk(params, setLoading)
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
      </div>
      <img src={logo} />
      <h1>Profile</h1>
      <MyPostsContainer />
    </div>
  )
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  }
}
const mapDispatchToProps = {
  getProfileThunk,
}

export const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent)

const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
