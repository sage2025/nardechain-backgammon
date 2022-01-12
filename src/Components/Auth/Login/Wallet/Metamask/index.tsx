import React from "react";
import App from "./App";
import { DAppProvider } from "@usedapp/core";

const Metamask = () => {
  return(
  <React.StrictMode>
    <DAppProvider config={{}}>
      <App />
    </DAppProvider>
  </React.StrictMode>
  )
}

export default Metamask;