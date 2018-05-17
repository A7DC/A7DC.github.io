import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Transition, config } from 'react-spring'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker();

