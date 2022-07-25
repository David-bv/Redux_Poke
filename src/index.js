import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducer/rootReducer';

import './styles/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const composedEnhancer = composeAlt(
  applyMiddleware(thunk, logger)
);

const store = createStore(
  rootReducer,
  composedEnhancer 
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

