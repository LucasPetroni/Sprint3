import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Error404 from "./routes/Erro/Error404.jsx";
import Integrantes from "./routes/Integrantes/Integrantes.jsx";
import EditarChamados from "./routes/Chamados/EditarChamados.jsx";
import Chamados from "./routes/Chamados/Chamados.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/integrantes", element: <Integrantes /> },
      { path: "/chamados", element: <Chamados /> },
      { path: "/editar/chamados/:id", element: <EditarChamados /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
