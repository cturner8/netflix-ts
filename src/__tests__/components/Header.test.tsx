import { render, fireEvent } from "@testing-library/react";
import { Header } from "../../components";
import * as routes from "../../constants/routes";

jest.mock("react-router-dom", () => ({
  Link: () => <></>,
}));

describe("<Header />", () => {
  it("renders the basic header with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" to="/" />
          <Header.TextLink active="true">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText(/Hello I am a link!/i)).toBeTruthy();
    expect(getByTestId("header-bg")).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the basic header without a background", () => {
    const { container, getByText, queryByTestId } = render(
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src="/logo.svg" alt="Netflix" to="/" />
          <Header.ButtonLink to="/">Sign In</Header.ButtonLink>
          <Header.TextLink active="false">Hello I am a link!</Header.TextLink>
        </Header.Frame>
      </Header>
    );

    expect(getByText(/Hello I am a link!/i)).toBeTruthy();
    expect(queryByTestId("header-bg")).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the full header with a background", () => {
    const { container, getByText, getByTestId } = render(
      <Header dontShowSmallViewPort src={"joker1"}>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={routes.HOME}
              src={"/images/logo.svg"}
              alt="Netflix"
            />
            <Header.TextLink active={"false"}>Series</Header.TextLink>
            <Header.TextLink active={"true"}>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.SearchTerm searchTerm={"joker"} setSearchTerm={() => {}} />
            <Header.Profile>
              <Header.Picture src={"/images/cameron.png"} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={"/images/cameron.png"} />
                  <Header.TextLink active="false">Cameron</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink active="false">Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>Forever alone in a crowd...</Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    );

    const searchInput = getByTestId("search-input") as HTMLInputElement;

    expect(searchInput).toBeTruthy();
    expect(searchInput.value).toBe("joker");
    fireEvent.change(searchInput, { target: { value: "Simpsons" } });
    fireEvent.click(getByTestId("search-click"));

    expect(getByText(/Series/i)).toBeTruthy();
    expect(getByText(/Films/i)).toBeTruthy();
    expect(getByText(/Cameron/i)).toBeTruthy();
    expect(getByText(/Watch Joker Now/i)).toBeTruthy();
    expect(getByText(/Sign Out/i)).toBeTruthy();
    expect(getByText(/Play/i)).toBeTruthy();
    expect(getByText(/Forever alone in a crowd.../i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
