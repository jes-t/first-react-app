import React from "react";
import styles from "./Header.module.css";
import logo from "./logo.png";

const Header = () => {
    return (
        <div className={styles.container}>
       <img src={logo}/>
        </div>
    )
}

export default Header;