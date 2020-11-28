import {
  Container,
  Row,
  Column,
  Title,
  Link,
  Text,
  Break,
} from "./styles/footer";

export interface Props {}

interface RowProps {}
interface ColumnProps {}
interface TitleProps {}
interface LinkProps {
  href: string;
}
interface TextProps {}
interface BreakProps {}

interface Compound {
  Row: React.FC<RowProps>;
  Column: React.FC<ColumnProps>;
  Title: React.FC<TitleProps>;
  Link: React.FC<LinkProps>;
  Text: React.FC<TextProps>;
  Break: React.FC<BreakProps>;
}

const Footer: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FRow: React.FC<RowProps> = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>;
};

const FColumn: React.FC<ColumnProps> = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>;
};

const FLink: React.FC<LinkProps> = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

const FTitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const FText: React.FC<TextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const FBreak: React.FC<BreakProps> = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>;
};

Footer.Row = FRow;
Footer.Column = FColumn;
Footer.Title = FTitle;
Footer.Link = FLink;
Footer.Text = FText;
Footer.Break = FBreak;

export { Footer };
