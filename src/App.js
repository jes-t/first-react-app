import React from "react";
import "./App.css";

const App = () => {
  return (
  <div>
    <Header />
    <Technologies />   
  </div>);
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>CSS</li>
        <li>HTML</li>
        <li>JS</li>
        <li>React</li>
      </ul>
    </div>);
}

const Header = () => {
  return (<div>
    <a href='#s'>HOME</a>
    <a href='#s'>News Feed</a>
    <a href='#s'>Messages</a>
  </div>);
}

export default App;
