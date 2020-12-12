import { render, RenderResult } from "@testing-library/react";
import { OptForm } from "../../components";

describe("<OptForm />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
      </OptForm>
    );
  });

  it("renders the opt form with populated data", () => {
    const { container, getByText, getByPlaceholderText } = component;

    expect(getByText(/Try it now/i)).toBeTruthy();
    expect(
      getByText(
        /Ready to watch\? Enter your email to create or restart your membership./i
      )
    ).toBeTruthy();
    expect(getByPlaceholderText(/Email address/i)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
