import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { NewGameContextProvider } from "./store/new-game-context";

ReactDOM.render(
  <BrowserRouter>
    <NewGameContextProvider>
      <App />
    </NewGameContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
