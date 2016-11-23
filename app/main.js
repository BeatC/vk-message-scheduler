import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose
} from 'redux';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import middlewares from './middlewares';
import {
  App,
  app
} from './features/app';
import { tasks } from './features/task';
import { connections } from './features/connections';

injectTapEventPlugin();

const reducer = combineReducers({
  app,
  tasks,
  connections
});

const store = createStore(reducer, applyMiddleware(...middlewares));

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);
const element = document.getElementById('app');

ReactDOM.render(<Root/>, element);
