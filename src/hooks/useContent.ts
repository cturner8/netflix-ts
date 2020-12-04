import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { FirestoreDocument } from "../lib/firebase";

export const useContent = (target: string) => {
  const { firebase } = useContext(FirebaseContext);
  const [content, setContent] = useState<FirestoreDocument[]>([]);

  useEffect(() => {
    const getItems = async (collection: string) => {
      const ref = firebase.firestore().collection(collection);

      try {
        const snapshot = await ref.get();

        const allContent = snapshot.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));

        setContent(allContent);
      } catch (e) {
        console.log(e.message);
      }
    };

    getItems(target);
  }, [firebase, target]);

  return {
    [target]: content,
  };
};
