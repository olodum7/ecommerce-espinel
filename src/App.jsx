import "./App.css";
import React from "react";
import Rutas from "./routes";
import CarritoProveedor from "./context/CarritoProveedor";

function App() {
  return (
    <div className="App">
      <CarritoProveedor>
        <Rutas />
      </CarritoProveedor>
    </div>
  );
}

export default App;
