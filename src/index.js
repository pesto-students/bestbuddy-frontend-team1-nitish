import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import "./index.scss";
import App from "./App";
import { Store } from "./store/Store";

// Sentry.init({
//   dsn: "https://8a876e70e31c4d4f81b67f30c3d86105@o4504844072714240.ingest.sentry.io/4504844114198528",
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0, //lower the value in production
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
