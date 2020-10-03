import React, { useState } from "react";
import { Post } from "./Post";
import { Input } from "antd";

export const MyPosts = (props) => {
  const [textInput, setTextInput] = useState("");

  const onEnter = () => {
    const obj = {
      id: props.posts.length,
      text: textInput,
    };
    props.posts.push(obj);
    setTextInput("");
  };

  const onHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <div>
        <Input.TextArea autoSize onPressEnter={onEnter} onChange={onHandler} value={textInput} style={{width: "300px"}} />
      </div>
      <div>
        {props.posts.map((item) => {
          return <Post postText={item.text} key={item.id} />;
        })}
      </div>
    </div>
  );
};
