import React from "react";
import { RouterProvider } from "react-router-dom";
import GuarianRef from "./Pages/Guarians/GuarianRef";
import { router } from "./router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
