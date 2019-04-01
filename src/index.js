import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import indexRoutes from './routes/index';

ReactDOM.render(
    <Router>
      <Switch>
        {indexRoutes.map((route, key) => (
          <Route exact path={route.path} component={route.component} key={key} />
        ))}
      </Switch>
    </Router>,
  document.getElementById('root'),
);
