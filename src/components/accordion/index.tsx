import { createContext, useContext, useState } from "react";
import {
  Inner,
  Container,
  Title,
  Frame,
  Item,
  Header,
  Body,
} from "./styles/accordion";

interface Props {}

interface TitleProps {}
interface FrameProps {}
interface ItemProps {}
interface HeaderProps {}
interface BodyProps {}

interface Compound {
  Title: React.FC<TitleProps>;
  Frame: React.FC<FrameProps>;
  Item: React.FC<ItemProps>;
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
}

type ToggleShow = boolean;
type SetToggleShow = React.Dispatch<React.SetStateAction<ToggleShow>>;

interface Context {
  toggleShow?: ToggleShow;
  setToggleShow?: SetToggleShow;
}

const ToggleContext = createContext<Context>({});

const Accordion: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
};

const ATitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const AFrame: React.FC<FrameProps> = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};

const AItem: React.FC<ItemProps> = ({ children, ...restProps }) => {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

const AHeader: React.FC<HeaderProps> = ({ children, ...restProps }) => {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);
  const onClick = () => {
    if (setToggleShow) {
      setToggleShow((prevToggle: ToggleShow) => !prevToggle);
    }
  };
  const actionButton = toggleShow ? (
    <img src="/images/icons/close-slim.png" alt="close" />
  ) : (
    <img src="/images/icons/add.png" alt="open" />
  );

  return (
    <Header onClick={onClick} {...restProps}>
      {children}
      {actionButton}
    </Header>
  );
};

const ABody: React.FC<BodyProps> = ({ children, ...restProps }) => {
  const { toggleShow } = useContext(ToggleContext);

  return toggleShow ? <Body {...restProps}>{children}</Body> : <></>;
};

Accordion.Title = ATitle;
Accordion.Frame = AFrame;
Accordion.Item = AItem;
Accordion.Header = AHeader;
Accordion.Body = ABody;

export { Accordion };
