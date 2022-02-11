import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Nav/Navbar";
import React, { useState } from "react";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const [items, setItems] = useState(0);

  function onAdd(contador) {
    agregarCarrito(contador);
  }

  function agregarCarrito(contador) {
    return setItems(contador);
  }

  return (
    <div className="App">
      <Navbar agregarCarrito={items} />
      <ItemListContainer
        greetings="Te damos la bienvenida al eCommerce"
        onAdd={onAdd}
      />
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
