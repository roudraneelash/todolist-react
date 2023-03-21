import React from "react";
import ReactDOM from "react-dom/client";
import App from "./component/App";
import { Provider } from "./context/list";
import "./index.css";

const root = document.getElementById("root");
const el = ReactDOM.createRoot(root);

el.render(
  <Provider>
    <App />
  </Provider>
);
