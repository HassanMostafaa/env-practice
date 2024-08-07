import { FunctionComponent } from "react";
import {
  SSimpleCard,
  SSimpleCardText,
  SSimpleCardTitle,
} from "./styles/SSimpleCard.styles";

interface ISimpleCardProps {
  title: string;
  text: string;
}

export const SimpleCard: FunctionComponent<ISimpleCardProps> = ({
  title,
  text,
}) => (
  <SSimpleCard>
    {title && <SSimpleCardTitle>{title}</SSimpleCardTitle>}
    {text && <SSimpleCardText>{text}</SSimpleCardText>}
  </SSimpleCard>
);
