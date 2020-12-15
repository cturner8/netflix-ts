import { render, fireEvent, waitFor } from "@testing-library/react";
import { SignUp } from "../../pages";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "../../context/firebase";

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as object),
  useHistory: () => ({}),
}));

const firebase = {
  auth: () => ({
    createUserWithEmailAndPassword: jest.fn(() =>
      Promise.resolve({
        user: {
          updateProfile: jest.fn(() => Promise.resolve("i am signed up")),
        },
      })
    ),
  }),
} as any;

describe("<SignUp />", () => {
  it("renders the sign up page with a form submission", async () => {
    const { getByTestId, getByPlaceholderText, queryByTestId } = render(
      <Router>
        <FirebaseContext.Provider value={{ firebase }}>
          <SignUp />
        </FirebaseContext.Provider>
      </Router>
    );

    fireEvent.change(getByPlaceholderText(/First name/i), {
      target: { value: "cameron" },
    });
    fireEvent.change(getByPlaceholderText(/Email address/i), {
      target: { value: "cameron@gmail.com" },
    });
    fireEvent.change(getByPlaceholderText(/Password/i), {
      target: { value: "test123" },
    });
    fireEvent.click(getByTestId("sign-up"));

    await waitFor(() => {
      expect(
        (getByPlaceholderText(/First name/i) as HTMLInputElement).value
      ).toBe("cameron");
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
