import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "../../components";

import { Login, Home, Upload } from "../../pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <div>
          <NavBar />
          <Route path="/dashboard" component={Home} />
          <Route path="/upload" component={Upload} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}
