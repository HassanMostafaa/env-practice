import React, { type PropsWithChildren, type FunctionComponent } from 'react';
import { SRootlayout } from './styles/SRootlayout';

export interface IRootlayout extends PropsWithChildren {}

export const Rootlayout: FunctionComponent<IRootlayout> = ({children}) => {
  return (
    <SRootlayout>
      {children}
    </SRootlayout>
  )
}