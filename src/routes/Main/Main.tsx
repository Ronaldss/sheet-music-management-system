import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Login, Home } from "../../pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
