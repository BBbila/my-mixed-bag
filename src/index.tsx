import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "mobx-react";
import stores from "./mobx/index";
import "./Common/styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider {...stores}>
    <App />
  </Provider>
);

reportWebVitals();
