import { BrowserRouter as Router, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";

export const App = () => {
  return (
    <Router>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.BROWSE} component={Browse} />
      <Route exact path={routes.SIGN_IN} component={SignIn} />
      <Route exact path={routes.SIGN_UP} component={SignUp} />
    </Router>
  );
};
