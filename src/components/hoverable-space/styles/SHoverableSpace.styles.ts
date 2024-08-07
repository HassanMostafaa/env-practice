"use client";

import styled from "styled-components";

export const SHoverableSpaceContainer = styled.div`
  overflow: hidden;
  height: 400px;
  width: 100%;
  position: absolute;
  z-index: 1;

  .content {
    z-index: 3;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    background: radial-gradient(
      closest-side,
      transparent 20%,
      rgb(var(--background-start-rgb)) 100%
    );
    inset: 0;
    width: 100%;
    pointer-events: none;
    height: 100%;
  }
`;

export const SHoverableSpace = styled.div`
  display: flex;
  position: absolute;
  flex-wrap: wrap;
  margin-top: 0px;
  transform: rotateX(50deg) rotateY(-5deg) rotateZ(20deg);
`;

export const SHoverableSpaceTile = styled.div<{ $pickedColor: string }>`
  background-color: rgb(var(--background-start-rgb));
  transition: background-color ease-in-out 0.5s;
  border: 1px solid rgb(var(--callout-border-rgb));
  margin: 0px;
  width: 50px;
  aspect-ratio: 1;
  position: relative;
  &:hover {
    transition: background-color ease-in-out 0s;
    background-color: ${(prop) => prop.$pickedColor};
  }

  &::before {
    position: absolute;
    content: "+";
    font-size: 28px;
    top: -20px;
    left: -10px;
    color: rgb(var(--primary-glow));
  }
  &::after {
    position: absolute;
    content: "+";
    font-size: 28px;
    bottom: -15px;
    left: -10px;
    color: rgb(var(--background-start-rgb));
  }
`;
