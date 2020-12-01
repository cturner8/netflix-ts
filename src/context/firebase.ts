import { createContext } from "react";
import { FirebaseApp } from "../lib/firebase";

interface Context {
  firebase: FirebaseApp;
}

export const FirebaseContext = createContext<Context | null>(null);
