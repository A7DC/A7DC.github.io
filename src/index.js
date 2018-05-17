import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import {Navigation} from './components/Navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Navigation} />
    </div>
  </Router>,
  document.getElementById('root')
)
registerServiceWorker();
