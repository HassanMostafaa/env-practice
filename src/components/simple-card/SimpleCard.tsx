import {
  SSimpleCard,
  SSimpleCardText,
  SSimpleCardTitle,
} from "./styles/SSimpleCard.styles";

interface ISimpleCardProps {
  title: string;
  text: string;
}

export const SimpleCard = ({ title, text }: ISimpleCardProps) => (
  <SSimpleCard>
    {title && <SSimpleCardTitle>{title}</SSimpleCardTitle>}
    {text && text.length > 0 && <SSimpleCardText>{text}</SSimpleCardText>}
  </SSimpleCard>
);
