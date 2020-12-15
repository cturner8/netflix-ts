import { useState, useContext, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "../containers/Footer";
import { HeaderContainer } from "../containers/Header";
import { Form } from "../components";
import * as routes from "../constants/routes";

export const SignIn = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = !password || !emailAddress;

  const handleSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);

      history.push(routes.BROWSE);
    } catch (e) {
      setEmailAddress("");
      setPassword("");
      setError(e.message);
    }
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error data-testid="error">{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn}>
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              type="password"
            />
            <Form.Submit
              data-testid="sign-in"
              disabled={isInvalid}
              type="submit"
            >
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix?
              <Form.Link to={routes.SIGN_UP}>Sign up here</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};
