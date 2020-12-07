import { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./Profiles";
import { FirebaseContext } from "../context/firebase";
import { FirebaseUser } from "../lib/firebase";
import { Loading, Header } from "../components";
import * as routes from "../constants/routes";
import logo from "../logo.svg";

interface Props {
  slides: object;
}

export const BrowseContainer: React.FC<Props> = ({ slides }) => {
  const [profile, setProfile] = useState<FirebaseUser>(null);
  const [loading, setLoading] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [profile?.displayName]);

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header dontShowSmallViewPort src={"joker1"}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={routes.HOME} src={logo} alt="Netflix" />
            <Header.TextLink active="true">Series</Header.TextLink>
            <Header.TextLink active="false">Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user?.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user?.photoURL} />
                  <Header.TextLink active="false">
                    {user?.displayName}
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
