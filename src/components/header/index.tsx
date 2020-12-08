import {
  ImgHTMLAttributes,
  HTMLAttributes,
  useState,
  Dispatch,
  SetStateAction,
  InputHTMLAttributes,
} from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  FeatureCallOut,
  Link,
  Group,
  Picture,
  Dropdown,
  Profile,
  Search,
  SearchInput,
  SearchIcon,
  PlayButton,
} from "./styles/header";

export interface Props {
  bg?: boolean;
  src?: string;
  dontShowSmallViewPort?: boolean;
}

interface FrameProps {}
interface GroupProps {}
export interface PictureProps {
  src: string | null | undefined;
}
interface ProfileProps {}
interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  to: string;
}
interface ButtonLinkProps {
  to: string;
}

interface DropdownProps {}
interface FeatureProps {}
interface TextProps {}
export interface TextLinkProps extends HTMLAttributes<HTMLParagraphElement> {
  active: "true" | "false";
}

interface FeatureCallOutProps {}

type SearchTerm = string;
type SetSearchTerm = Dispatch<SetStateAction<SearchTerm>>;
interface SearchTermProps {
  searchTerm: SearchTerm;
  setSearchTerm: SetSearchTerm;
}

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  active: boolean;
}

interface PlayButtonProps {}

interface Compound {
  Frame: React.FC<FrameProps>;
  Group: React.FC<GroupProps>;
  Logo: React.FC<LogoProps>;
  ButtonLink: React.FC<ButtonLinkProps>;
  Feature: React.FC<FeatureProps>;
  Text: React.FC<TextProps>;
  TextLink: React.FC<TextLinkProps>;
  FeatureCallOut: React.FC<FeatureCallOutProps>;
  Picture: React.FC<PictureProps>;
  Profile: React.FC<ProfileProps>;
  Dropdown: React.FC<DropdownProps>;
  SearchTerm: React.FC<SearchTermProps>;
  PlayButton: React.FC<PlayButtonProps>;
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

const HGroup: React.FC<GroupProps> = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

const HPicture: React.FC<PictureProps> = ({ src, ...restProps }) => {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />;
};

const HProfile: React.FC<ProfileProps> = ({ children, ...restProps }) => {
  return <Profile {...restProps}>{children}</Profile>;
};

const HSearchTerm: React.FC<SearchTermProps> = ({
  searchTerm,
  setSearchTerm,
  ...restProps
}) => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((prevActive) => !prevActive)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
      />
    </Search>
  );
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

const HFeatureCallOut: React.FC<FeatureCallOutProps> = ({
  children,
  ...restProps
}) => {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

const HFeature: React.FC<FeatureProps> = ({ children, ...restProps }) => {
  return <Feature {...restProps}>{children}</Feature>;
};

const HDropdown: React.FC<DropdownProps> = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

const HText: React.FC<TextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const HTextLink: React.FC<TextLinkProps> = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>;
};

const HPlayButton: React.FC<PlayButtonProps> = ({ children, ...restProps }) => {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Header.Frame = HFrame;
Header.Group = HGroup;
Header.Logo = HLogo;
Header.ButtonLink = HButtonLink;
Header.Feature = HFeature;
Header.Text = HText;
Header.TextLink = HTextLink;
Header.FeatureCallOut = HFeatureCallOut;
Header.Picture = HPicture;
Header.Profile = HProfile;
Header.Dropdown = HDropdown;
Header.SearchTerm = HSearchTerm;
Header.PlayButton = HPlayButton;

export { Header };
