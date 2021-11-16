import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Layout } from "../../components";
import { Login, Home, Upload, Register, Musics } from "../../pages";
import PrivateRoute from "../PrivateRoute";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <PrivateRoute
          path="/dashboard"
          component={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
        <PrivateRoute
          path="/upload"
          component={() => (
            <Layout>
              <Upload />
            </Layout>
          )}
        />
        <PrivateRoute
          path="/register"
          component={() => (
            <Layout>
              <Register />
            </Layout>
          )}
        />
        <PrivateRoute
          path="/musics/:title"
          component={() => (
            <Layout>
              <Musics />
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}
