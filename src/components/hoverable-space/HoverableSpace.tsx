"use client";
import { FunctionComponent } from "react";
import {
  SHoverableSpace,
  SHoverableSpaceTile,
} from "./styles/SHoverableSpace.styles";

export const HoverableSpace: FunctionComponent = () => {
  return (
    <SHoverableSpace>
      {Array.from({ length: 200 }, (_, index) => (
        <SHoverableSpaceTile
          key={index}
          $pickedColor={
            ["#F87171", "#38BDF8", "##4ADE80", "#FDE047"][
              Math.floor(Math.random() * 4)
            ]
          }
        ></SHoverableSpaceTile>
      ))}
    </SHoverableSpace>
  );
};
// 38BDF8
