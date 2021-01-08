import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "../../components";

import { Login, Home, Upload } from "../../pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard">
          <NavBar />
          <Home />
        </Route>
        <Route path="/upload">
          <NavBar />
          <Upload />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
