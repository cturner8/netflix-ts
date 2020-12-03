import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as routes from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import { useAuthListener } from "./hooks";

export const App = () => {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={routes.BROWSE}
          path={routes.SIGN_IN}
          exact
        >
          <SignIn />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={routes.BROWSE}
          exact
          path={routes.SIGN_UP}
        >
          <SignUp />
        </IsUserRedirect>

        <IsUserRedirect
          user={user}
          loggedInPath={routes.BROWSE}
          exact
          path={routes.HOME}
        >
          <Home />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={routes.BROWSE}>
          <Browse />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};
