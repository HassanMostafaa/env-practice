import React, { type PropsWithChildren, type FunctionComponent } from 'react';
import { SContainer } from './styles/SContainer';

export interface IContainer extends PropsWithChildren {}

export const Container: FunctionComponent<IContainer> = ({children}) => {
  return (
    <SContainer>
      {children}
    </SContainer>
  )
}