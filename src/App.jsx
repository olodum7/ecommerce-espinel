import "./App.css";
import React from "react";
import Rutas from "./routes";
import CartContext from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContext>
        <Rutas />
      </CartContext>
    </div>
  );
}

export default App;
