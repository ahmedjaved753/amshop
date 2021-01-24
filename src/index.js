import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import "./index.css";
import './App.scss';
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
  );
reportWebVitals();
