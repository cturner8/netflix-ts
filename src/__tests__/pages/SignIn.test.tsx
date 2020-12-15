import { render, fireEvent, waitFor } from "@testing-library/react";
import { SignIn } from "../../pages";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as object),
  useHistory: () => ({}),
}));

const firebase = {
  auth: () => ({
    signInWithEmailAndPassword: jest.fn(() =>
      Promise.resolve("I am signed in!")
    ),
  }),
} as any;

describe("<SignIn />", () => {
  it("renders the sign in page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignIn />
        </FirebaseContext.Provider>
      </Router>
    );

    fireEvent.change(getByPlaceholderText(/Email address/i), {
      target: { value: "cameron@gmail.com" },
    });
    fireEvent.change(getByPlaceholderText(/Password/i), {
      target: { value: "test123" },
    });
    fireEvent.click(getByTestId("sign-in"));

    await waitFor(() => {
      expect(
        (getByPlaceholderText(/Email address/i) as HTMLInputElement).value
      ).toBe("cameron@gmail.com");
      expect(
        (getByPlaceholderText(/Password/i) as HTMLInputElement).value
      ).toBe("test123");
      expect(queryByTestId("error")).toBeFalsy();
    });
  });
});
