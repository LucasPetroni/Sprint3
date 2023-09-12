import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";


//Bloco de rotas
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditarProdutos from "./routes/Produtos/EditarProdutos.jsx";
import Home from "./routes/Home/Home.jsx";
import Produtos from "./routes/Produtos/Produtos.jsx";
import Error404 from "./routes/Erro/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/produtos", element: <Produtos /> },
      { path: "/editar/produtos/:id", element: <EditarProdutos /> },
    ],
  },
]);

//Bloco de rota

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);