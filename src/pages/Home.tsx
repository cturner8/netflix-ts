import { FaqsContainer } from "../containers/Faqs";
import { FooterContainer } from "../containers/Footer";
import { JumbotronContainer } from "../containers/Jumbotron";
import { HeaderContainer } from "../containers/Header";
import { OptFormContainer } from "../containers/OptForm";
import { Feature } from "../components";

export const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time
          </Feature.SubTitle>
          <OptFormContainer />
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
};
