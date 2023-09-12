import Lista from "./components/Lista.jsx";
import Rodape from "./components/Rodape";
import { Outlet } from "react-router-dom";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <div className="container">
        <Lista />
        <Outlet />
        <Rodape />
      </div>
    </>
  );
}
