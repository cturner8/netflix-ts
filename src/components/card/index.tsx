import { createContext, useState, useContext, HTMLAttributes } from "react";
import {
  Container,
  Group,
  Title,
  SubTitle,
  Text,
  Meta,
  Item,
  Image,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
  Content,
  Entities,
} from "./styles/card";

interface Props {}

interface ItemFeature {}

export interface GroupProps {
  flexDirection: string;
  alignItems: string;
  margin: string;
}

interface TitleProps {}
interface SubTitleProps {}
interface TextProps {}
interface MetaProps {}
interface ItemProps extends HTMLAttributes<HTMLDivElement> {
  item: ItemFeature;
}
interface ImageProps {}
interface EntityProps {}
export interface FeatureProps {
  src: string;
}
export interface FeatureTextProps {
  fontWeight: string;
}
export interface MaturityProps {
  rating: number;
}

interface Context {
  showFeature: boolean;
  setShowFeature: Function;
  itemFeature: ItemFeature;
  setItemFeature: Function;
}

export const FeatureContext = createContext<Context>({
  showFeature: false,
  setShowFeature: () => {},
  itemFeature: {},
  setItemFeature: () => {},
});

interface Compound {
  Group: React.FC<GroupProps>;
  Title: React.FC<TitleProps>;
  SubTitle: React.FC<SubTitleProps>;
  Text: React.FC<TextProps>;
  Meta: React.FC<MetaProps>;
  Item: React.FC<ItemProps>;
  Image: React.FC<ImageProps>;
  Entities: React.FC<EntityProps>;
}

const Card: React.FC<Props> & Compound = ({ children, ...restProps }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <FeatureContext.Provider
      value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
    >
      <Container {...restProps}>{children}</Container>
    </FeatureContext.Provider>
  );
};

const CGroup: React.FC<GroupProps> = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>;
};

const CTitle: React.FC<TitleProps> = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};

const CSubTitle: React.FC<SubTitleProps> = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

const CText: React.FC<TextProps> = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>;
};

const CMeta: React.FC<MetaProps> = ({ children, ...restProps }) => {
  return <Meta {...restProps}>{children}</Meta>;
};

const CItem: React.FC<ItemProps> = ({ item, children, ...restProps }) => {
  const { setShowFeature, setItemFeature } = useContext(FeatureContext);

  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...restProps}
    >
      {children}
    </Item>
  );
};

const CImage: React.FC<ImageProps> = ({ ...restProps }) => {
  return <Image {...restProps} />;
};

const CEntities: React.FC<EntityProps> = ({ children, ...restProps }) => {
  return <Entities {...restProps}>{children}</Entities>;
};

Card.Group = CGroup;
Card.Title = CTitle;
Card.SubTitle = CSubTitle;
Card.Text = CText;
Card.Meta = CMeta;
Card.Item = CItem;
Card.Image = CImage;
Card.Entities = CEntities;

export { Card };
