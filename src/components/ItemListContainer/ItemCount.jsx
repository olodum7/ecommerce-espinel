import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, item }) => {
  const [contador, setContador] = useState(initial);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const [agregar, setAgregar] = useState(false);

  function onAdd(item, contador) {
    setAgregar(true);
    item["cantidadPersonas"] = contador;
    agregarAlCarrito(item);
  }

  const handleChange = () => {
    setContador(contador);
  };

  return (
    <div className="container">
      {!agregar && (
        <>
          <div className="row item-count-row align-items-center justify-content-center">
            <h5 className="text-center">Cantidad de personas:</h5>
            <div className="input-group item-count col-8 col-md-4 p-0">
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  data-dir="dwn"
                  onClick={() => setContador(contador - 1)}
                  disabled={contador === 1 && true}
                >
                  <span className="bx bx-minus"></span>
                </button>
              </span>
              <input
                type="text"
                className="form-control text-center"
                value={contador}
                onChange={handleChange}
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default"
                  data-dir="up"
                  onClick={() => setContador(contador + 1)}
                  disabled={contador >= stock && true}
                >
                  <span className="bx bx-plus"></span>
                </button>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="btn col-12 p-0">
              <button
                id="btnAgregarCarrito"
                className="btn col"
                disabled={contador > stock && true}
                onClick={() => onAdd(item, contador)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </>
      )}
      {agregar && (
        <>
          <div className="row">
            <h5 className="mt-5 agregado-al-carrito text-center">
              ¡Agregado correctamente!
            </h5>
          </div>

          <div className="row btn-despues-agregado-carrito">
            <Link to={"/"} className="btn col mb-4">
              <i className="fa fa-angle-left"></i> Continuar comprando
            </Link>
            <Link to={"/cart"} className="btn col mb-4">
              Terminar mi compra
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemCount;
