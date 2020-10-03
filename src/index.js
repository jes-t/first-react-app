import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, withRouter } from "react-router-dom";
import { dialogs, posts, usersArr } from "./data/data";

const AppWithRouter = withRouter(props => <App {...props} />) 

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter dialogs={dialogs} posts={posts} users={usersArr} />
 </BrowserRouter>,
  document.getElementById("root")
);
