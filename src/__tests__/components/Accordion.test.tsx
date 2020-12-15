import { render, fireEvent, RenderResult } from "@testing-library/react";
import { Accordion } from "../../components";
import faqsData from "../../fixtures/faqs.json";

describe("<Accordion />", () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(
      <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    );
  });

  it("renders the accordion with populated data", () => {
    const { container, getByText } = component;

    expect(getByText(/Frequently Asked Questions/i)).toBeTruthy();
    expect(getByText(/What is Netflix\?/i)).toBeTruthy();
    expect(getByText(/How much does Netflix cost\?/i)).toBeTruthy();
    expect(getByText(/Where can I watch\?/i)).toBeTruthy();
    expect(getByText(/How do I cancel\?/)).toBeTruthy();
    expect(getByText(/What can I watch on Netflix\?/i)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("opens and closes the accordion component", async () => {
    const { container, queryByText } = component;

    const whatIsNetflixText =
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";
    const header = queryByText(/What is Netflix\?/i);

    expect(queryByText(whatIsNetflixText)).toBeFalsy();
    fireEvent.click(header!);
    expect(queryByText(whatIsNetflixText)).toBeTruthy();

    fireEvent.click(header!);
    expect(queryByText(whatIsNetflixText)).toBeFalsy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
