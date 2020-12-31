import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "../../components";

import { Login, Home } from "../../pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <div>
          <NavBar />
          <Route path="/dashboard" component={Home} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}
