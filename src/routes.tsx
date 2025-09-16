import  { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Test from "./Components/Test";
import PlpApp from "plp/PlpPage";
import PdpApp from "pdp/PdpPage";
// const PlpApp = React.lazy(() => import("plp/PlpPage"));
// const PdpApp = React.lazy(() => import("pdp/PdpPage"));

const router = createBrowserRouter([
  {
    path: "/nachsendeservice.jsp",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PlpApp />
      </Suspense>
    ),
  },
  {
    path: "/checkout.jsp",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PdpApp />
      </Suspense>
    ),
  },
  {
    path: "/test",
    element: <Test />,
  },
  
]);

export default router;
