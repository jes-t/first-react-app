import React from "react";
import { List } from "antd";
import { Companion } from "./Companion";
import styled from "styled-components";

export const Companions = (props) => {
  return (
    <CompanionsList
      dataSource={props.dialogs}
      renderItem={(item) => <Companion dialog={item} />}
    />
  );
};

const CompanionsList = styled(List)`
  width: 300px;
`;
