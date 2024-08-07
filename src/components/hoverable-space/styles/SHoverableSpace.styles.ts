"use client";

import styled from "styled-components";

export const SHoverableSpace = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px 0 0 0;
  transform: rotateX(50deg) rotateY(-5deg) rotateZ(20deg);
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    background: radial-gradient(circle, transparent 25%, #fff 80%);
    inset: 0;
    width: 100%;
    pointer-events: none;
    height: 100%;
  }
`;

export const SHoverableSpaceTile = styled.div<{ $pickedColor: string }>`
  background-color: white;
  transition: background-color ease-in-out 0.5s;
  border: 1px solid #eee;
  margin: 0px;
  width: 50px;
  aspect-ratio: 1;
  position: relative;
  &:hover {
    transition: background-color ease-in-out 0s;
    background-color: ${(prop) =>
      prop.$pickedColor ? prop.$pickedColor : "transparent"};
  }

  &::before {
    position: absolute;
    content: "+";
    font-size: 28px;
    top: -20px;
    left: -10px;
    color: black;
  }
  &::after {
    position: absolute;
    content: "+";
    font-size: 28px;
    bottom: -15px;
    left: -10px;
    color: black;
  }
`;
