import React from "react";

export const Post = (props) => {
  
    return (
    <div
      style={{
        width: "100px",
        height: "50px",
        background: "green",
        margin: 10,
      }}
    >
      {props.postText}
    </div>
  );
};
