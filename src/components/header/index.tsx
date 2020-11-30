import { Link as ReactRouterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";

export interface Props {
  bg?: boolean;
  src?: string;
}

interface FrameProps {}
interface LogoProps {
  to: string;
  alt: string;
  src: string;
}
interface ButtonLinkProps {
  to: string;
}

interface Compound {
  Frame: React.FC<FrameProps>;
  Logo: React.FC<LogoProps>;
  ButtonLink: React.FC<ButtonLinkProps>;
}

const Header: React.FC<Props> & Compound = ({
  bg = true,
  children,
  ...restProps
}) => {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <>{children}</>
  );
};

const HFrame: React.FC<FrameProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const HLogo: React.FC<LogoProps> = ({ to, ...restProps }) => {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

const HButtonLink: React.FC<ButtonLinkProps> = ({ ...restProps }) => {
  return <ButtonLink {...restProps} />;
};

Header.Frame = HFrame;
Header.Logo = HLogo;
Header.ButtonLink = HButtonLink;

export { Header };
