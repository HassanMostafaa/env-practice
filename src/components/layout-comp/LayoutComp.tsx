"use client";
import React, { type PropsWithChildren, type FunctionComponent } from "react";
import { Nav } from "../nav";
import { Footer } from "../footer";

export interface ILayoutComp extends PropsWithChildren {}

export const LayoutComp: FunctionComponent<ILayoutComp> = ({ children }) => {
  const [isReady, setIsReady] = React.useState(false);

  React.useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsReady(true);
  }, []);

  return (
    <div
      style={{
        opacity: isReady ? 1 : 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
