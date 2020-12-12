import { render } from "@testing-library/react";
import { Loading } from "../../components";

describe("<Loading />", () => {
  it("renders the loading component", () => {
    const { container, getByTestId } = render(
      <Loading src="/images/cameron.png" data-testid="loading" />
    );

    expect(getByTestId("loading")).toBeTruthy();
    expect(getByTestId("loading-picture")).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the loading release body", () => {
    const { container } = render(<Loading.ReleaseBody />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
