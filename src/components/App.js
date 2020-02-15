import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Form from "./Form";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/page1" component={Form} />
            <Route path="/page2" render={() => <h2>Page2</h2>} />
            <Route path="/" render={() => <h2>Home</h2>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
