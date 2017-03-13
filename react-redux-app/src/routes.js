import React from 'react';
import { Router, Route } from 'react-router';
import { App, Home } from './views';

const routes = (history) => (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path='/campaign/:filerId' component={App} />
    </Router>
);

export default routes;