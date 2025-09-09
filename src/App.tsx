import React, { Suspense, useEffect } from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

// import { MyDayPicker } from "microfrontend";
import "microfrontend/microfrontend.min.css";
import Test from "./Components/Test";
import LiveInputDisplay from "./Components/LiveInputDisplay";
import { eventBus } from "./eventBus";

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

    observer.observe(remoteContainer, { childList: true, subtree: true, characterData: true });
  }

  return (
    <>
      <div>
        <h1>Container App</h1>

      </div>
      {/* <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<PlpApp />} />
            <Route path="/" element={<LiveInputDisplay />} />
            <Route path="/pdp/:id" element={<PdpApp />} />
            <Route path="/test" element={<Test />} />
            
          </Routes>
        </Suspense>
      </BrowserRouter> */}

      <PlpApp></PlpApp>
    </>
  );
}
