"use client";
import { FunctionComponent, PropsWithChildren } from "react";
import {
  SHoverableSpace,
  SHoverableSpaceTile,
  SHoverableSpaceContainer,
} from "./styles/SHoverableSpace.styles";

export const HoverableSpace: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <SHoverableSpaceContainer>
      <SHoverableSpace>
        {Array.from({ length: 200 }, (_, index) => (
          <SHoverableSpaceTile
            key={index}
            $pickedColor={
              ["#F87171", "#38BDF8", "#4ADE80", "#FDE047"][
                Math.floor(Math.random() * 4)
              ]
            }
          ></SHoverableSpaceTile>
        ))}
      </SHoverableSpace>
      <div className="content">{children}</div>
    </SHoverableSpaceContainer>
  );
};
