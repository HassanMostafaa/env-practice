"use client";
import styled from "styled-components";

export const SSimpleCard = styled.div`
  padding: 20px;
  margin: 20px 0;
  background-color: var(--glass);
  backdrop-filter: blur(4px);
  box-shadow: 0px 0px 25px #00000020;
  color: rgb(var(--foreground-rgb));
  max-width: 350px;
  z-index: 2;
  border-radius: 10px;
`;

export const SSimpleCardTitle = styled.div`
  color: rgb(var(--foreground-rgb));
  font-size: 18px;
  white-space: nowrap;
  font-weight: bold;
`;
export const SSimpleCardText = styled.pre`
  color: rgb(var(--foreground-rgb));
  text-align: justify;
  font-size: 13px;
  /* font-family: Arial, Helvetica, sans-serif; */
  white-space: break-spaces;
`;
