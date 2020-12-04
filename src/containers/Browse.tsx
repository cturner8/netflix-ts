import { useContext, useState, useEffect } from "react";
import { SelectProfileContainer } from "./Profiles";
import { FirebaseContext } from "../context/firebase";
import { FirebaseUser } from "../lib/firebase";
import { Loading } from "../components";

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
    loading ? (
      <Loading src={user?.photoURL} />
    ) : (
      <></>
    )
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
};
