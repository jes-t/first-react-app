import React from "react";
import { List, Avatar } from "antd";
import styled from "styled-components";

export const Companion = (props) => {

  return (
    <CompanionItem>
      <List.Item.Meta
        avatar={<Avatar src={props.dialog.avatarUrl} />}
        title={`${props.dialog.firstName} ${props.dialog.lastName}`}
        description={props.dialog.messages[2].message}
      />
    </CompanionItem>
  );
};

const CompanionItem = styled(List.Item)`
  padding: 16px;
  :hover {
    background-color: #fafafa;
  }
`;