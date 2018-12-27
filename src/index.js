import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //applyMiddleware helps connect middleware(like thunk) to our redux store
import App from './components/App';
import reducers from './reducers';
import thunk from 'redux-thunk';

 //applyMiddleware helps connect middleware(like thunk) to our redux store
 //OR
 //Thats how we hook up a Middleware with a reduxStore
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
