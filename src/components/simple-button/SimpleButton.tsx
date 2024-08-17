import React, { type PropsWithChildren, type FunctionComponent } from 'react';
import { SSimpleButton } from './styles/SSimpleButton';

export interface ISimpleButton extends PropsWithChildren {}

export const SimpleButton: FunctionComponent<ISimpleButton> = ({children}) => {
  return (
    <SSimpleButton>
      {children}
    </SSimpleButton>
  )
}