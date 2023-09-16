import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import TabContextProvider from "./provider/TabProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TabContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TabContextProvider>
);
