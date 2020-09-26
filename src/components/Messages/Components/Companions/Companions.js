import React from "react";
import { List, Avatar } from "antd";

export const Companions = (props) => {

    return (
      <List dataSource={props.dialogs} renderItem={item => (
          <List.Item>
              <List.Item.Meta  avatar={<Avatar src={item.avatarUrl}/>} title={`${item.firstName} ${item.lastName}`} description={item.messages[2].message} />
          </List.Item>
      )}
      />
    );
};
