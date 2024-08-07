import { FunctionComponent } from "react";
import { SSimpleCard } from "./styles/SSimpleCard.styles";

interface ISimpleCardProps {
    title:string;
    text:string;
}

export const SimpleCard: FunctionComponent<ISimpleCardProps> = ({title, text}) => (
  <SSimpleCard>SimpleCard</SSimpleCard>
);
