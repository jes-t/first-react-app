import React from "react";
import { List } from "antd";
import { Message } from "./Message";

export const Messages = ({ dialogs, usersArr }) => {
  return (
    <List
      className="messages"
      dataSource={dialogs}
      renderItem={(item) => <Message dialog={item} usersArr={usersArr} />}
    />
  );
};
