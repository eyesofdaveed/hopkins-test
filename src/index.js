import React from "react";
import { render } from "react-dom";

import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { sagaWatcher } from "./redux/sagas";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

const saga = createSagaMiddleware();

export const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(sagaWatcher);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
