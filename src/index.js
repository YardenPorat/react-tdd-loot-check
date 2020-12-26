import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './index.css';

render(
  <React.Fragment>
    <Provider store={createStore(rootReducer, {}, applyMiddleware(thunk))}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);
