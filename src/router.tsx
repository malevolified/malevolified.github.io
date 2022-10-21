import React from "react";
import { createHashRouter } from "react-router-dom";
import { GuarianRef } from "./Pages/Guarians/GuarianRef";
import { guarianRoutes } from "./Pages/Guarians/refSections";

export const router = createHashRouter([
  {
    path: "guarians",
    element: <GuarianRef />,
    children: guarianRoutes,
  },
]);
