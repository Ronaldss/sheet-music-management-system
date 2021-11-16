import { Redirect, Route, RouteProps } from "react-router";
import { useFirebaseAuth } from "../../context";

interface IPrivateRoute extends RouteProps {
  component: any;
}

const PrivateRoute: React.FC<IPrivateRoute> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useFirebaseAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return !!user ? <Component {...props} /> : <Redirect to="/" />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
