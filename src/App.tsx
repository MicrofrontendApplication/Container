
// import { MyDayPicker } from "microfrontend";
import "microfrontend/microfrontend.min.css";
import Test from "./Components/Test";
import LiveInputDisplay from "./Components/LiveInputDisplay";
import { eventBus } from "./eventBus";

import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./routes";

// Lazy-load your remote components
const PlpApp = React.lazy(() => import("plp/PlpPage"));
const PdpApp = React.lazy(() => import("pdp/PdpPage"));

export default function App() {
  const remoteContainer = document.getElementById("remote-container");

  if (remoteContainer) {
    const observer = new MutationObserver(() => {
      const msgNode = remoteContainer.querySelector("#host-message");
      if (msgNode) {
        const data = JSON.parse(msgNode.textContent);
        console.log("📩 Microfrontend received via MutationObserver:", data);
      }
    });

    observer.observe(remoteContainer, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  return (
    <>
      <div>
        <h1>Container App</h1>
      
      </div>
     

      <RouterProvider router={router} />
    </>
  );
}
