import { render, RenderResult } from "@testing-library/react";
import { Jumbotron } from "../../components";
import jumboData from "../../fixtures/jumbo.json";

describe("<Jumbotron />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image
                src={item.image}
                alt={item.alt}
                data-testid={`${item.id}-jumbo-image`}
              />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    );
  });

  it("renders the jumbotron with populated data", () => {
    const { container, getByText, getByAltText, getByTestId } = component;

    expect(getByText(/Enjoy on your TV./i)).toBeTruthy();
    expect(getByAltText(/Tiger King on Netflix/i)).toBeTruthy();
    expect(getByTestId("1-jumbo-image")).toBeTruthy();
    expect(
      getByText(
        /Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more./i
      )
    ).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
