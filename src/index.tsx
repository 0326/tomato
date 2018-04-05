import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Link, HashRouter } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

import './index.scss';

ReactDOM.render(
  <HashRouter>
    <div className="container">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
      </ul>
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
