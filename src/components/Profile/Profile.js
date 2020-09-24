import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import logo from "../../logo.png";

export const Profile = (props) => {
  return <div>
      <img src={logo} />
      <h1>Profile</h1>
      <MyPosts />
      </div>;
};

