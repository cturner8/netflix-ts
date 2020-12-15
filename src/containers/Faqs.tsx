import { Accordion } from "../components";
import faqsData from "../fixtures/faqs.json";
import { OptFormContainer } from "./OptForm";

interface Props {}

export const FaqsContainer: React.FC<Props> = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>

      <OptFormContainer />
    </Accordion>
  );
};
