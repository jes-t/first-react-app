import React from "react";
import { List } from "antd";
import Avatar from "antd/lib/avatar/avatar";
// import { usersArr } from "../../../../data/data";

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

export const Message = ({ dialog }) => {
  return (
    <List.Item style={{ padding: "16px" }} className="messageItem">
      {dialog.messages.map((message) => {
        debugger;
        const fullName = usersArr.filter((element) => {
          if (element.id === message.userId) {
            return element;
          }
        });

        return (
          <List.Item.Meta
            avatar={<Avatar src={fullName[0].avatarUrl} />}
            style={{ width: "100%", padding: 10 }}
            title={
              <Title
                firstName={fullName[0].firstName}
                lastName={fullName[0].lastName}
                time={message.time}
              />
            }
            description={<Description message={message.message} />}
          />
        );
      })}
    </List.Item>
  );
};

const Description = ({ message }) => {
  return (
    <>
      <div>{message}</div>
    </>
  );
};

const Title = ({ firstName, lastName, time }) => {
  return (
    <div>
      <span>{`${firstName} ${lastName}`}</span>
      <span style={{paddingLeft: 10, fontWeight: 100, fontSize: 12}}>{time}</span>
    </div>
  );
};
// messages: [
//     { data: "26.09.2020", time: "21:00", userId: 0, message: "gfhdhhd!" },
//     {
//       data: "26.09.2020",
//       time: "21:02",
//       userId: 1,
//       message: "gfhdhjd! Как дела?",
//     },
//     {
//       data: "26.09.2020",
//       time: "21:05",
//       userId: 0,
//       message: "Нормально, а у yefdmkfbs?",
//     },
//   ],
