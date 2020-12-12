import { render } from "@testing-library/react";
import { Profiles } from "../../components";

describe("<Profiles />", () => {
  it("renders the profiles with populated data", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture
              src={"/images/cameron.png"}
              data-testid="profile-picture"
            />
            <Profiles.Name>Cameron</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText(/Who's watching\?/i)).toBeTruthy();
    expect(getByTestId("profile-picture")).toBeTruthy();
    expect(getByText(/Cameron/i)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the profiles with populated data but misc profile image", () => {
    const { container, getByText, getByTestId } = render(
      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture data-testid="profile-picture-misc" />
            <Profiles.Name>Cameron</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    );

    expect(getByText(/Who's watching\?/i)).toBeTruthy();
    expect(getByTestId("profile-picture-misc")).toBeTruthy();
    expect(getByText(/Cameron/i)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
