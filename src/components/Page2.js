import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Page2 = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h2>Page 2</h2>
      <ul>
        <li>
          <Link to={`${match.url}/page21`}>Page 2.1</Link>
        </li>
        <li>
          <Link to={`${match.url}/page22`}>Page 2.2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:pageId`} component={SubPage} />
        <Route
          path={`${match.path}`}
          render={() => <h3>Nothing to show, please select a page.</h3>}
        />
      </Switch>
    </div>
  );
};

const SubPage = () => {
  const params = useParams();

  return <h3>Selected page {params.pageId}</h3>;
};

export default Page2;
