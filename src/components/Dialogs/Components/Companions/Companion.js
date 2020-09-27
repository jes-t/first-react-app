import React, {useState} from "react";
import { List, Avatar } from "antd";

export const Companion = (props) => {
  const [active, setActive] = useState(false);

  return (
    <List.Item
      className={active ? "activeCompanion" : ""}
      style={{padding: '16px'}}
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <List.Item.Meta
        avatar={<Avatar src={props.dialog.avatarUrl} />}
        title={`${props.dialog.firstName} ${props.dialog.lastName}`}
        description={props.dialog.messages[2].message}
      />
    </List.Item>
  );
};
