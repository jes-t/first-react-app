import React from "react";
import { List, Avatar } from "antd";

export const Companion = (props) => {
  return (
    <List itemLayout='horizontal' dataSource={data} renderItem={Item => (
        <List.Item>
            <List.Item.Meta  avatar={<Avatar src="" } />
        </List.Item>
    )}
    />
  );
};