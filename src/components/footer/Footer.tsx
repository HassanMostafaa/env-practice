import React, { type PropsWithChildren, type FunctionComponent } from "react";
import styles from "./styles/SFooter.module.scss";

export interface IFooter {}

export const Footer: FunctionComponent<IFooter> = ({}) => {
  return (
    <footer className={styles.footer}>
      Footer component with sass modules
    </footer>
  );
};
