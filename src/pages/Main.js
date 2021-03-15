import { Home } from "@material-ui/icons";
import About from "./About";
import Contacts from "./Contacts";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Main() {
    return (
        <div>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                </nav>
                <Switch>
          <Route path="/about">
           <About />
          </Route>
          <Route path="/contacts">
           <Contacts />
          </Route>
          <Route path="/">
           <Home />
          </Route>
        </Switch>
            </Router>
        </div>
    )
}
