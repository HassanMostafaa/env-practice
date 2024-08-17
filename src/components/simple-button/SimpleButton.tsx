import React, {
  type PropsWithChildren,
  type FunctionComponent,
  type ReactNode,
} from "react";
import { SSimpleButton } from "./styles/SSimpleButton";

export interface ISimpleButton extends PropsWithChildren {
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
}

export const SimpleButton: FunctionComponent<ISimpleButton> = ({
  children,
  onClick,
  disabled,
  icon,
}) => {
  return (
    <SSimpleButton onClick={onClick} disabled={disabled}>
      {icon && icon} {children}
    </SSimpleButton>
  );
};
