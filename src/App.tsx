import { FaqsContainer } from "./containers/Faqs";
import { FooterContainer } from "./containers/Footer";
import { JumbotronContainer } from "./containers/Jumbotron";

export const App = () => {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};
