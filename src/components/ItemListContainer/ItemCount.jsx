import React, { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoProveedor";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial, item }) => {
  const [contador, setContador] = useState(initial);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const [agregar, setAgregar] = useState(false);

  function onAdd(item) {
    setAgregar(true);
    agregarAlCarrito(item);
  }

  return (
    <div className="row">
      {!agregar && (
        <>
          <div className="input-group number-spinner col-md-6">
            <span className="input-group-btn data-dwn">
              <button
                className="btn btn-default btn-primary"
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
            />
            <span className="input-group-btn data-up">
              <button
                className="btn btn-default btn-primary"
                data-dir="up"
                onClick={() => setContador(contador + 1)}
                disabled={contador >= stock && true}
              >
                <span className="bx bx-plus"></span>
              </button>
            </span>

            <button
              id="btnAgregarCarrito"
              className="btn btn-outline-primary mt-3 col"
              disabled={contador > stock && true}
              onClick={() => onAdd(item)}
            >
              Agregar al carrito
            </button>
          </div>
        </>
      )}
      {agregar && (
        <div className="col-md-6">
          <Link
            to={"/cart"}
            className="btn btn-primary mt-3 col text-uppercase"
          >
            Finalizar compra
          </Link>
        </div>
      )}
    </div>
  );
};

export default ItemCount;
