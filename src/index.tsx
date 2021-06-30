import { render } from "react-dom";
import React from "react";
import { App } from "./app";

const appId = "app";

let appRoot = document.getElementById(appId);
if (!appRoot) {
  appRoot = document.createElement("div");
  appRoot.setAttribute("id", "app");
  document.body.insertBefore(appRoot, document.body.firstChild);
}

render(<App />, appRoot);
