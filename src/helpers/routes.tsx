import { Route, Redirect, RouteProps } from "react-router-dom";
import * as routes from "../constants/routes";
import { FirebaseUser } from "../lib/firebase";

type User = FirebaseUser | null;

interface IsUserRedirectProps extends RouteProps {
  user: User;
  loggedInPath: string;
}

interface ProtectedRouteProps extends RouteProps {
  user: User;
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
