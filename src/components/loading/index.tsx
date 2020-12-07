import { Spinner, LockBody, Picture, ReleaseBody } from "./styles/index";

interface Props {
  src: string | null | undefined;
}

interface ReleaseBodyProps {}

interface Compound {
  ReleaseBody: React.FC<ReleaseBodyProps>;
}

const Loading: React.FC<Props> & Compound = ({ src, ...restProps }) => {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Picture src={`images/users/${src}.png`} />
    </Spinner>
  );
};

const LReleaseBody: React.FC<ReleaseBodyProps> = () => {
  return <ReleaseBody />;
};

Loading.ReleaseBody = LReleaseBody;

export { Loading };
