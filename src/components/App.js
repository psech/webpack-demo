import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import Header from "./Header";
import Home from "./Home";
import MyForm from "./Form";
import Page2 from "./Page2";
import PageHooks from "./Page-Hooks";
import UpdateParent from "../pages/UpdateParent";
import ReducerPage from "../pages/ReducerPage";

class App extends Component {
  render() {
    return (
      <Router /*basename="/webpack-demo"*/>
        <Header />
        <Container>
          <Row>
            <Switch>
              <Route path="/page1" component={MyForm} />
              <Route path="/page2" component={Page2} />
              <Route path="/page-hooks" component={PageHooks} />
              <Route path="/update-parent" component={UpdateParent} />
              <Route path="/reducer-page" component={ReducerPage} />
              <Route path="/" component={Home} />
            </Switch>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
