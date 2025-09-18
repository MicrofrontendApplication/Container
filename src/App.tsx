

import "microfrontend/microfrontend.min.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes";


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
