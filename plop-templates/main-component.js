import React from 'react';
import { S{{ properCase name }} } from './styles/S{{ properCase name }}';

export interface I{{ properCase name }} extends React.PropsWithChildren {}

export const {{ properCase name }}: React.FunctionComponent<I{{ properCase name }}> = ({children}) => {
  return (
    <S{{properCase name}}>
      {children}
    </S{{properCase name}}>
  )
}