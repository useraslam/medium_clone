import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "routes";
import Topbar from "components/Topbar";
import { CurrentUserProvider } from "contexts/currentUser";

const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <Topbar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
