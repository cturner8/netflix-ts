import { Route, Redirect, RouteProps } from "react-router-dom";
import * as routes from "../constants/routes";
import { FirebaseUser } from "../lib/firebase";

interface IsUserRedirectProps extends RouteProps {
  user: FirebaseUser;
  loggedInPath: string;
}

interface ProtectedRouteProps extends RouteProps {
  user: FirebaseUser;
}

export const IsUserRedirect: React.FC<IsUserRedirectProps> = ({
  user,
  loggedInPath,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        !user ? <>{children}</> : <Redirect to={{ pathname: loggedInPath }} />
      }
    />
  );
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  user,
  children,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          <>{children}</>
        ) : (
          <Redirect
            to={{ pathname: routes.SIGN_IN, state: { from: location } }}
          />
        )
      }
    />
  );
};
