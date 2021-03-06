import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing on window
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.signup = APIUtil.signup;
  // window.logout = APIUtil.logout;
  // window.login = APIUtil.login;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
