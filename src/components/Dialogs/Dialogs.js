import React from "react";
import { Companions } from "./Components/Companions/Companions";
import { Messages } from "./Components/Messages/Messages";
import "./dialogs.css";



export const Dialogs = ({ dialogs, usersArr}) => {
  
  return (
    <div className="dialogs">
      <Companions dialogs={dialogs} />
      <Messages dialogs={dialogs} usersArr={usersArr} />
    </div>
  );
};
