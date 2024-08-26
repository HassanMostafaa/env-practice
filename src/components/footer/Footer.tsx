import React, { type PropsWithChildren, type FunctionComponent } from "react";
import styles from "./styles/SFooter.module.scss";
import Link from "next/link";

export interface IFooter {}

export const Footer: FunctionComponent<IFooter> = ({}) => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 By: Hassan Mohamed. All rights reserved.</p>

      {/* <div className={styles.menus}>
        <Link href="#">About</Link>
        <Link href="#">Contact Us</Link>
      </div> */}
    </footer>
  );
};
