import React from "react";
import { Card, Avatar } from "antd";

const usersArr = [
  {
    id: 0,
    firstName: "Jems",
    lastName: "Band",
    description: "I'm a frontend developer",
    avatarUrl:
      "https://sun9-8.userapi.com/o4uD1PeHB2-m8Db3_tPtHnc4MjmDO4Tv4YF4xw/KT8-N1tVDSY.jpg",
  },
  {
    id: 1,
    firstName: "Nyuta",
    lastName: "Len",
    description: "I'm a backend developer",
    avatarUrl:
      "https://sun9-38.userapi.com/s2Q9Sx9JrvmrGNf4VLI3Q1K3PLq7wdgtyP6tpw/MJU6_Gke5xk.jpg",
  },
  {
    id: 2,
    firstName: "Rob",
    lastName: "Stark",
    description: "I'm a full-stack developer",
    avatarUrl:
      "https://sun9-25.userapi.com/iygXKWZTY6JJq7MHonu84abE2JNwtvyeVtBH3Q/37ktCVugVA0.jpg",
  },
];

export const Users = (props) => {
  return (
    <div>
      {usersArr.map((user) => {
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
