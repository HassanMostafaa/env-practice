"use client";
import React, { type FunctionComponent } from "react";
import styles from "./styles/SNav.module.scss";
import { useCurrentUser } from "@/src/store/useCurrentUser";
import Link from "next/link";

export interface INav {}

export const Nav: FunctionComponent<INav> = ({}) => {
  const { currentUser, deleteCurrentUser } = useCurrentUser();
  const logout = () => {
    deleteCurrentUser();
  };
  return (
    <nav className={styles.nav}>
      {currentUser ? <p>{currentUser.name}</p> : <p>Welcome Guest</p>}
      <div className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contacts</Link>
        {currentUser && (
          <button className={styles.logout} onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};
