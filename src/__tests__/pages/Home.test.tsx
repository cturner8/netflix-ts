import { render } from "@testing-library/react";
import { Home } from "../../pages";

jest.mock("react-router-dom", () => ({
  Link: () => <></>,
}));

describe("Homepage", () => {
  it("renders", () => {
    const { getByText, getAllByText, getAllByPlaceholderText } = render(
      <Home />
    );

    expect(getByText(/Unlimited films, TV programmes and more./i)).toBeTruthy();
    expect(getByText(/Watch anywhere. Cancel at any time/i)).toBeTruthy();
    expect(getAllByText(/Try it now/i)).toBeTruthy();
    expect(
      getAllByText(
        /Ready to watch\? Enter your email to create or restart your membership/i
      )
    ).toBeTruthy();
    expect(getByText(/Watch anywhere. Cancel at any time/i)).toBeTruthy();
    expect(getAllByPlaceholderText(/Email address/i)).toBeTruthy();
  });
});
