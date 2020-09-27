import React, { useState } from "react";
import { List } from "antd";
import { Companion } from "./Companion";

export const Companions = (props) => {

  return (
    <List
      dataSource={props.dialogs}
      renderItem={(item) => (
        <Companion dialog={item} />
      )}
    />
  );
};
