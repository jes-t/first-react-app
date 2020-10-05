import React from "react";
import { Card, Avatar } from "antd";

export const Users = (props) => {
  
  return (
    <div>
      {props.users.map((user) => {
        return (
          <Card style={{ width: 300, marginTop: 16 }} key={user.id}>
            <Card.Meta
              avatar={<Avatar size={70} src={user.avatarUrl} />}
              title={`${user.firstName} ${user.lastName}`}
              description={user.description}
            />
          </Card>
        );
      })}
    </div>
  );
};
