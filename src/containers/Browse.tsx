import { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./Profiles";
import { FirebaseContext } from "../context/firebase";
import { FirebaseUser, FirestoreDocument } from "../lib/firebase";
import { Loading, Header, Card } from "../components";
import * as routes from "../constants/routes";
import logo from "../logo.svg";
import { SelectionFilter } from "../types";
import { FooterContainer } from "./Footer";

interface Props {
  slides: {
    [x: string]: FirestoreDocument[];
  };
}

export const BrowseContainer: React.FC<Props> = ({ slides }) => {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState<FirebaseUser>(null);
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState<SelectionFilter[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser;

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, [profile?.displayName]);

  useEffect(() => {
    setSlideRows(
      slides[category].map((item) => ({
        title: item.title,
        data: item.data,
      }))
    );
  }, [slides, category]);

  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e.message);
    }
  };

  return profile?.displayName ? (
    <>
      {loading ? <Loading src={user?.photoURL} /> : <Loading.ReleaseBody />}
      <Header dontShowSmallViewPort src={"joker1"}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={routes.HOME} src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === "series" ? "true" : "false"}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? "true" : "false"}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.SearchTerm
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user?.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user?.photoURL} />
                  <Header.TextLink active="false">
                    {user?.displayName}
                  </Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink active="false" onClick={handleSignOut}>
                    Sign out
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
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title>{slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={item.docId} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              {/* <Player>
                <Player.Button />
                <Player.Video src="/videos/bunny.mp4" />
              </Player> */}
              <p>hello</p>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
