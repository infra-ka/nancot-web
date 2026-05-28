import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { I18nProvider } from "./common-lib/i18n/I18nProvider";
import "./common-lib/theme/tokens.css";
import "./common-lib/theme/neon-theme.css";
import "./app/app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
