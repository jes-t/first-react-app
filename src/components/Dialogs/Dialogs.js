import React from "react";
import { Companions } from "./Components/Companions/Companions";
import { Messages } from "./Components/Messages/Messages";
import "./dialogs.css";



export const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <Companions dialogs={props.dialogs} />
      <Messages dialogs={props.dialogs} />
    </div>
  );
};
