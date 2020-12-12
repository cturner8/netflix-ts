import { render } from "@testing-library/react";
import { Feature } from "../../components";

describe("<Feature />", () => {
  it("renders the feature with populated data", () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
        <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
      </Feature>
    );

    expect(getByText(/Unlimited films, TV programmes and more./i)).toBeTruthy();
    expect(getByText(/Watch anywhere. Cancel at any time/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the feature with just a title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
      </Feature>
    );

    expect(getByText(/Unlimited films, TV programmes and more./i)).toBeTruthy();
    expect(queryByText(/Watch anywhere. Cancel at any time/i)).toBeFalsy();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders the feature with just a sub-title", () => {
    const { container, getByText, queryByText } = render(
      <Feature>
        <Feature.SubTitle>Watch anywhere. Cancel at any time</Feature.SubTitle>
      </Feature>
    );

    expect(
      queryByText(/Unlimited films, TV programmes and more./i)
    ).toBeFalsy();
    expect(getByText(/Watch anywhere. Cancel at any time/i)).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });
});
