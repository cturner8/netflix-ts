import {
  getByPlaceholderText,
  render,
  RenderResult,
} from "@testing-library/react";
import { Form } from "../../components";
import * as routes from "../../constants/routes";

jest.mock("react-router-dom", () => ({
  Link: () => <></>,
}));

describe("<Form />", () => {
  it("renders the form with populated data", () => {
    const { container, getByText, getByPlaceholderText } = render(
      <Form>
        <Form.Title>Sign In Now</Form.Title>

        <Form.Base>
          <Form.Input placeholder="Email address" />
          <Form.Input placeholder="Password" type="password" />
          <Form.Submit disabled type="submit">
            Sign In
          </Form.Submit>
          <Form.Text>
            New to Netflix?
            <Form.Link to={routes.SIGN_UP}>Sign up here</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form.Base>
      </Form>
    );

    expect(
      getByText(
        /This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more./i
      )
    ).toBeTruthy();
    expect(getByText(/Sign In Now/i)).toBeTruthy();
    expect(getByText("Sign In")).toBeTruthy();
    expect(getByText("Sign In")).toBeDisabled();
    expect(getByPlaceholderText(/Email address/i)).toBeTruthy();
    expect(getByPlaceholderText(/Password/i)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the form with an error", () => {
    const { container, getByText, queryByText } = render(
      <Form>
        <Form.Error>Your email address is already being used</Form.Error>

        <Form.Submit type="submit">Sign In</Form.Submit>
      </Form>
    );

    expect(getByText(/Your email address is already being used/i)).toBeTruthy();
    expect(queryByText("Sign In")).not.toBeDisabled();

    expect(container.firstChild).toMatchSnapshot();
  });
});
