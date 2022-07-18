import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { pokemonReducer } from './redux/reducer/pokemonReducer';

import './styles/index.css';
import { featuring, logger } from './middlewares';


const root = ReactDOM.createRoot(document.getElementById('root'));

const composedEnhancer = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, featuring)
);

const store = createStore(
  pokemonReducer,
  composedEnhancer 
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

