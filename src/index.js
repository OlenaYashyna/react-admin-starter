import React from 'react';
import ReactDOM from 'react-dom';

import createSagaMiddleware from 'redux-saga';
import { MuiThemeProvider } from 'material-ui/styles';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import theme from './styles/material-ui-theme';
import './styles/index.css';
import TableAdd from "./containers/table";
import store from './store'
// const devTools = process.env.NODE_ENV !== 'production' && window.devToolsExtension
//   ? window.devToolsExtension()
//   : f => f;
//
// const enhancers = compose(
//   applyMiddleware(createSagaMiddleware()),
//   devTools,
// );

// const reducer = combineReducers({
//
// });
//
// const store = createStore(reducer, {}, enhancers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <TableAdd />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
