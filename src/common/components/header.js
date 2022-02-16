import styles from "src/common/styles/Navbar.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [login, setLogin] = useState(true);

  return (
    <header className={styles["wrapper-header"]}>
      <h1 className={styles["title-brand"]}>RAZ</h1>
      <ul className={styles["wrapper-ul"]}>
        <li className={styles["list-menu"]}>HOME</li>
        <li className={styles["list-menu"]}>
          PAGES <i className="bi bi-caret-down-fill"></i>
        </li>
        <li className={styles["list-menu"]}>
          SHOP <i className="bi bi-caret-down-fill"></i>
        </li>
        <li className={styles["list-menu"]}>BLOG</li>
      </ul>
      <div className={styles["wrapper-icon"]}>
        <i className={`bi bi-search ${styles.icon}`}></i>
        <i className={`bi bi-heart ${styles.icon}`}></i>
        <i className={`bi bi-cart ${styles.icon}`}></i>
        <div className={styles["wrapper-btn-menu"]}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {login ? (
        <MenuLogin />
      ) : (
        <ul className={styles["wrapper-menu"]}>
          <li>Login</li>
          <li>Register</li>
          <li>Chat</li>
          <li>Notification</li>
        </ul>
      )}
    </header>
  );
}

function MenuLogin() {
  return (
    <ul className={styles["wrapper-menu"]}>
      <li>Profile</li>
      <li>Chat</li>
      <li>Notification</li>
      <li>Logout</li>
    </ul>
  );
}

export default Header;
