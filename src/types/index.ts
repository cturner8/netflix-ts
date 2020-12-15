import { FirestoreDocument } from "../lib/firebase";

export interface CategoryDocument {
  docId: string;
  title: string;
  description: string;
  genre: string;
  maturity: number;
  slug: string;
}

export interface SelectionFilter {
  title: string;
  data: CategoryDocument[];
}

export interface Collections {
  series?: FirestoreDocument[];
  films?: FirestoreDocument[];
}
