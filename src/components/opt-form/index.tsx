import { InputHTMLAttributes } from "react";
import { Container, Input, Button, TextC, Break } from "./styles/opt-form";

interface Props {}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
interface ButtonProps {}
interface TextProps {}
interface BreakProps {}

interface Compound {
  Input: React.FC<InputProps>;
  Button: React.FC<ButtonProps>;
  Text: React.FC<TextProps>;
  Break: React.FC<BreakProps>;
}

const OptForm: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const OFInput: React.FC<InputProps> = ({ ...restProps }) => {
  return <Input {...restProps} />;
};

const OFButton: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="try now" />
    </Button>
  );
};

const OFText: React.FC<TextProps> = ({ children, ...restProps }) => {
  return <TextC {...restProps}>{children}</TextC>;
};

const OFBreak: React.FC<BreakProps> = ({ ...restProps }) => {
  return <Break {...restProps} />;
};

OptForm.Input = OFInput;
OptForm.Button = OFButton;
OptForm.Text = OFText;
OptForm.Break = OFBreak;

export { OptForm };
