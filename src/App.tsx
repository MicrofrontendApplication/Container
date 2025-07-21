import React, { Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "microfrontend/microfrontend.min.css";
import { MyDayPicker, Paragraph } from 'microfrontend';

const PlpApp = React.lazy(() => import('plp/PlpPage'));
const PdpApp = React.lazy(() => import('pdp/PdpPage'));

const App = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={  
            <PlpApp></PlpApp>
          } />
          <Route path="/pdp/:id" element={<PdpApp />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    // <>
    //   <PlpApp></PlpApp>

    //   <PdpApp />

      
    //     <MyDayPicker
    //         mode="single"
    //         selected={selectedDate}
    //         onSelect={(date: any) => setSelectedDate(date as Date)}
    //         startMonth={new Date(2024, 6)}
    //         endMonth={new Date(2025, 11)}
    //       />
    // </>

  );
};

export default App;
