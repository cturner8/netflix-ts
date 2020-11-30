import { Header } from "../components";
import * as routes from "../constants/routes";
import logo from "../logo.svg";

interface Props {}

export const HeaderContainer: React.FC<Props> = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={routes.HOME} alt="Netflix" src={logo} />
        <Header.ButtonLink to={routes.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};
