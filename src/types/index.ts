import { FirestoreDocument } from "../lib/firebase";

export interface Collections {
  series: FirestoreDocument[];
  films: FirestoreDocument[];
}
