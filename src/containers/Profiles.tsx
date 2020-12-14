import * as routes from "../constants/routes";
import logo from "../logo.svg";
import { Header, Profiles } from "../components";
import { FirebaseUser } from "../lib/firebase";

interface Props {
  user: FirebaseUser;
  setProfile: Function;
}

export const SelectProfileContainer: React.FC<Props> = ({
  user,
  setProfile,
}) => {
  const photo = user?.photoURL ? user?.photoURL : undefined;

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={routes.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            data-testid="user-profile"
            onClick={() =>
              setProfile({
                displayName: user?.displayName,
                photoURL: user?.photoURL,
              })
            }
          >
            <Profiles.Picture src={photo} />
            <Profiles.Name>{user?.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};
