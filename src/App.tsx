import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const PlpApp = React.lazy(() => import('plp/PlpPage'));
const PdpApp = React.lazy(() => import('pdp/PdpPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PlpApp />} />
          <Route path="/pdp/:id" element={<PdpApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
