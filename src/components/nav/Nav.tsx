import React, { type PropsWithChildren, type FunctionComponent } from 'react';
import { SNav } from './styles/SNav';

export interface INav extends PropsWithChildren {}

export const Nav: FunctionComponent<INav> = ({children}) => {
  return (
    <SNav>
      {children}
    </SNav>
  )
}