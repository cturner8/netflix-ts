import { ImgHTMLAttributes, MouseEvent } from "react";
import { Container, Title, List, Item, Picture, Name } from "./styles/profiles";

interface Props {}

interface TitleProps {}
interface ListProps {}
interface UserProps {
  onClick: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {}
interface NameProps {}

interface Compound {
  Title: React.FC<TitleProps>;
  List: React.FC<ListProps>;
  User: React.FC<UserProps>;
  Picture: React.FC<PictureProps>;
  Name: React.FC<NameProps>;
}

const Profiles: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

const PTitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const PList: React.FC<ListProps> = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

const PUser: React.FC<UserProps> = ({ onClick, children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>;
};

const PPicture: React.FC<PictureProps> = ({ src, ...restProps }) => {
  return (
    <Picture
      {...restProps}
      src={src ? `/images/users/${src}.png` : `/images/misc/loading.gif`}
    />
  );
};

const PName: React.FC<NameProps> = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>;
};

Profiles.Title = PTitle;
Profiles.List = PList;
Profiles.User = PUser;
Profiles.Picture = PPicture;
Profiles.Name = PName;

export { Profiles };
