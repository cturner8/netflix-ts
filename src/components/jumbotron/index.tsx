import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

export interface Props {
  direction?: string;
}

interface ContainerProps {}
interface PaneProps {}
interface TitleProps {}
interface SubTitleProps {}
interface ImageProps {
  src: string;
  alt: string;
}

interface Compound {
  Container: React.FC<ContainerProps>;
  Pane: React.FC<PaneProps>;
  Title: React.FC<TitleProps>;
  SubTitle: React.FC<SubTitleProps>;
  Image: React.FC<ImageProps>;
}

const Jumbotron: React.FC<Props> & Compound = ({
  children,
  direction = "row",
  ...restProps
}) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

const JContainer: React.FC<ContainerProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const JPane: React.FC<PaneProps> = ({ children, ...restProps }) => {
  return <Pane {...restProps}>{children}</Pane>;
};

const JTitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const JSubTitle: React.FC<SubTitleProps> = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

const JImage: React.FC<ImageProps> = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

Jumbotron.Container = JContainer;
Jumbotron.Pane = JPane;
Jumbotron.Title = JTitle;
Jumbotron.SubTitle = JSubTitle;
Jumbotron.Image = JImage;

export { Jumbotron };
