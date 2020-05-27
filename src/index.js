import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";
import list from "./models/reducerList";
import filters from "./models/filters/reducerFilters";

const rootReducer = combineReducers({ list, filters });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider store={
    createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
  }><App /></Provider>, document.getElementById('root')
);
