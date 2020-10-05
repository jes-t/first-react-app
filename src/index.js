import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, withRouter } from "react-router-dom";
import { state } from "./redux/state";

const AppWithRouter = withRouter(props => <App {...props} />) 

ReactDOM.render(
  <BrowserRouter>
    <AppWithRouter state={state} />
 </BrowserRouter>,
  document.getElementById("root")
);
