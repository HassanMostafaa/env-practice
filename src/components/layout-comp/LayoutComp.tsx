"use client";
import React, { type PropsWithChildren, type FunctionComponent } from "react";

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
      <nav>nav</nav>
      {children}
      <footer style={{ marginTop: "auto" }}>footer</footer>
    </div>
  );
};
