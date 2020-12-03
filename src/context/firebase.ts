import { createContext } from "react";
import { FirebaseApp, firebase } from "../lib/firebase";

interface Context {
  firebase: FirebaseApp;
}

export const FirebaseContext = createContext<Context>({ firebase });
