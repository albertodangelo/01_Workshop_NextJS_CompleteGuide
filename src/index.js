import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// APP 01 - Lightbox
//import "./indexapp01.css";
//import App01 from "./App01";
//ReactDOM.render(<App01 />, document.getElementById("root"));

// APP 02 - Datenverarbeitung
import App02 from "./App02";
import "./indexapp02.css";
import { FavoritContextProvider } from "./store-app02/favorite-context";
ReactDOM.render(
  <FavoritContextProvider>
    <BrowserRouter>
      <App02 />
    </BrowserRouter>
  </FavoritContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
