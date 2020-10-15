import React, { useState } from "react";
import { Companions } from "./Components/Companions/Companions";
import { Messages } from "./Components/Messages/Messages";
import { Input } from "antd";
import styled from "styled-components";
import { newMessageActionCreator } from "../../redux/state";


export const Dialogs = ({ dialogs,dispatch, usersArr }) => {
  const [textMessage, setTextMessage] = useState("");

  const onEnter = () => {
    dispatch(newMessageActionCreator(textMessage));
    setTextMessage("");
  };

  const onHandler = (e) => {
    setTextMessage(e.target.value);
  };

  return (
    <DialogsContainer>
      <Companions dialogs={dialogs} />
      <Content>
        <Messages dialogs={dialogs} usersArr={usersArr} />
        <Input.TextArea
          autoSize
          onPressEnter={onEnter}
          onChange={onHandler}
          value={textMessage}
          style={{ width: "300px" }}
        />
      </Content>
    </DialogsContainer>
  );
};
const DialogsContainer = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
