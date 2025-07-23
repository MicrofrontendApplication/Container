import React, { Suspense } from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";

// import { MyDayPicker } from "microfrontend";
import "microfrontend/microfrontend.min.css";

// Lazy-load your remote components
const PlpApp = React.lazy(() => import("plp/PlpPage"));
const PdpApp = React.lazy(() => import("pdp/PdpPage"));

export default function App() {
  return (
    <>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<PlpApp />} />
            <Route path="/pdp/:id" element={<PdpApp />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </>
  );
}
