import { TitleStyled, Subtitle } from "./Title.style";

interface TitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

export const Title = (props: TitleProps) => {
  return (
    <>
      <TitleStyled>{props.title}</TitleStyled>
      <Subtitle>{props.subtitle}</Subtitle>
    </>
  )
}