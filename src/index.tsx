import React from "react";
import { render } from "react-dom";

import App from "./app";

const element = document.createElement("div");
document.body.appendChild(element);

render(<App />, element);
