import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import logo from '../../logo.png'
import * as axios from 'axios'
import { setUserProfile } from '../../redux/profile-reducer'
import { useParams } from 'react-router-dom'

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

  return (
    <div>
      <div>{profile ? profile.fullName : 'Имя пользователя'}</div>
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
