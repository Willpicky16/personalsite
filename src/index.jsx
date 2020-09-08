import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/app/app';

import rootReducer from './reducers/root-reducer';

import initialiseFirebase from './helpers/initialise-firebase';

import './index.scss';

initialiseFirebase();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
