import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from "redux";
import ChangeColor from "./store/reducer/reducer";
import './style/main.css'
import { Provider } from 'react-redux';

const store = createStore(
  ChangeColor,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
