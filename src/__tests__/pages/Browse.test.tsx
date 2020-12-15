import { render, screen } from "@testing-library/react";
import { Browse } from "../../pages";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";

const firebase = {
  auth: () => ({
    signOut: jest.fn(() => Promise.resolve({})),
    currentUser: {
      photoURL: "pic.png",
      displayName: "cameron",
    },
  }),
  firestore: () => ({
    collection: () => ({
      get: jest.fn(() => Promise.resolve({ docs: [], id: "" })),
    }),
  }),
} as any;

describe.skip("<Browse />", () => {
  beforeEach(() => {
    render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <Browse />
        </FirebaseContext.Provider>
      </Router>
    );
  });

  it("renders", () => {
    expect(screen).toBeTruthy();
  });

  it("renders the profile selection screen", () => {
    const { getByTestId } = screen;

    expect(getByTestId("select-profile")).toBeVisible();
  });
});
