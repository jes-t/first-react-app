import { addPostActionCreator } from '../../../redux/profile-reducer'
import { MyPosts } from './MyPosts'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
  }
}

const mapDispatchToProps = { addPost: addPostActionCreator }

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)
