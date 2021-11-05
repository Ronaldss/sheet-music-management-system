import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Layout } from "../../components";
import { Login, Home, Upload, Register, Musics } from "../../pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/upload">
          <Layout>
            <Upload />
          </Layout>
        </Route>
        <Route path="/register">
          <Layout>
            <Register />
          </Layout>
        </Route>
        <Route path="/musics/:title">
          <Layout>
            <Musics />
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
