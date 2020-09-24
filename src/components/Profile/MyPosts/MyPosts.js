import React, { useState } from "react";
import { Post } from "./Post";
import { Input } from "antd";

let posts = [
  { id: 0, text: "Мой первый пост" },
  { id: 1, text: "Мой второй пост" },
  { id: 2, text: "Мой третий пост" },
];

export const MyPosts = () => {
  const [textInput, setTextInput] = useState("");

  const onEnter = () => {
    const obj = {
      id: posts.length,
      text: textInput,
    };
    posts.push(obj);
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
        {posts.map((item) => {
          return <Post postText={item.text} key={item.id} />;
        })}
      </div>
    </div>
  );
};
