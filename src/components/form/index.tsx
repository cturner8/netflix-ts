import {
  InputHTMLAttributes,
  FormHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from "./styles/form";

interface Props {}

interface ErrorProps {}
interface BaseProps extends FormHTMLAttributes<HTMLFormElement> {}
interface TitleProps {}
interface TextProps {}
interface TextSmallProps {}
interface LinkProps {
  to: string;
}
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface SubmitProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

interface Compound {
  Error: React.FC<ErrorProps>;
  Base: React.FC<BaseProps>;
  Title: React.FC<TitleProps>;
  Text: React.FC<TextProps>;
  TextSmall: React.FC<TextSmallProps>;
  Link: React.FC<LinkProps>;
  Input: React.FC<InputProps>;
  Submit: React.FC<SubmitProps>;
}

const Form: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const FError: React.FC<ErrorProps> = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>;
};

const FBase: React.FC<BaseProps> = ({ children, ...restProps }) => {
  return <Base {...restProps}>{children}</Base>;
};

const FTitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const FText: React.FC<TextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const FTextSmall: React.FC<TextSmallProps> = ({ children, ...restProps }) => {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

const FLink: React.FC<LinkProps> = ({ children, to, ...restProps }) => {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

const FInput: React.FC<InputProps> = ({ children, ...restProps }) => {
  return <Input {...restProps}>{children}</Input>;
};

const FSubmit: React.FC<SubmitProps> = ({ children, ...restProps }) => {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = FError;
Form.Base = FBase;
Form.Title = FTitle;
Form.Text = FText;
Form.TextSmall = FTextSmall;
Form.Link = FLink;
Form.Input = FInput;
Form.Submit = FSubmit;

export { Form };
