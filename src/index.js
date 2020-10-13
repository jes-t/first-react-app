import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, withRouter } from "react-router-dom";
import { store } from "./redux/state";

const rerenderEntireTree = (state) => {
  const AppWithRouter = withRouter((props) => <App {...props} />);

  ReactDOM.render(
    <BrowserRouter>
      <AppWithRouter state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
