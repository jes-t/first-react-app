import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import logo from "../../logo.png";

export const Profile = ({ posts, addPost }) => {
  return (
    <div>
      <img src={logo} />
      <h1>Profile</h1>
      <MyPosts posts={posts} addPost={addPost} />
    </div>
  );
};
