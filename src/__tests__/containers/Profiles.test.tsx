import { render, fireEvent } from "@testing-library/react";
import { SelectProfileContainer } from "../../containers/Profiles";

jest.mock("react-router-dom", () => ({
  Link: () => <></>,
}));

describe("<Profiles />", () => {
  it("renders the profiles", () => {
    const user = {
      displayName: "cameron",
      photoURL: "profile.png",
    };
    const setProfile = jest.fn();

    const { getByTestId } = render(
      <SelectProfileContainer user={user as any} setProfile={setProfile} />
    );

    const button = getByTestId("user-profile");
    fireEvent.click(button);

    expect(setProfile).toHaveBeenCalled();
  });
});
