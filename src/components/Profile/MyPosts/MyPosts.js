import React, { useState } from "react";
import { Post } from "./Post";
import { Input } from "antd";

export const MyPosts = ({ addPost, posts }) => {
  const [textInput, setTextInput] = useState("");

  const onEnter = () => {
    addPost(textInput);
    setTextInput("");
  };

  const onHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <div>
        <Input.TextArea
          autoSize
          onPressEnter={onEnter}
          onChange={onHandler}
          value={textInput}
          style={{ width: "300px" }}
        />
      </div>
      <div>
        {posts.map((item) => {
          return <Post postText={item.text} key={item.id} />;
        })}
      </div>
    </div>
  );
};
