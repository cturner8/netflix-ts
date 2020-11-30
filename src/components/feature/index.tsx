import { Container, Title, SubTitle } from "./styles/feature";

interface Props {}

interface TitleProps {}
interface SubTitleProps {}

interface Compound {
  Title: React.FC<TitleProps>;
  SubTitle: React.FC<SubTitleProps>;
}

const Feature: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FTitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const FSubTitle: React.FC<SubTitleProps> = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Feature.Title = FTitle;
Feature.SubTitle = FSubTitle;

export { Feature };
