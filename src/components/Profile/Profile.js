import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import logo from '../../logo.png'
import * as axios from 'axios'
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'
import { Spin } from 'antd'
import styled from 'styled-components'

const ProfileContainer = ({ profile, setUserProfile }) => {
  const params = useParams()

  useEffect(() => {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0//profile/${
          params.id ? params.id : 13090
        }`
      )
      .then((response) => {
        setUserProfile(response.data)
      })
  }, [])
  if (!profile) {
    return (
      <SpinContainer>
        <Spin tip="Loading..." size="large" />
      </SpinContainer>
    )
  }
  return (
    <div>
      <div>
        <h1>{profile ? profile.fullName : 'Имя пользователя'} </h1>
        {`About me: ${profile.aboutMe}`}
        <div>
          <img src={profile.photos.small} />
        </div>
      </div>
      <img src={logo} />
      <h1>Profile</h1>
      <MyPostsContainer />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  }
}
const mapDispatchToProps = {
  setUserProfile,
}

export const Profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)

const SpinContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
