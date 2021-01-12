import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar, Footer } from "../../components";

import { Login, Home, Upload, Register, Musics } from "../../pages";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />

        <Route path="/dashboard">
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route path="/upload">
          <NavBar />
          <Upload />
          <Footer />
        </Route>
        <Route path="/register">
          <NavBar />
          <Register />
          <Footer />
        </Route>
        <Route path="/musics">
          <NavBar />
          <Musics />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
