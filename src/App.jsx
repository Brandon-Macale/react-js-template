import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
// uncomment below once a route/switch are implemented
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        {/* <Switch>
          <Route exact path="/example" component={example} />
        </Switch> */}
      </div>
    </Router>
  );
};

export default App;
