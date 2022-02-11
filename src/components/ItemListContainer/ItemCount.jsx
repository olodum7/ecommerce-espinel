import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd}) => {
  const [contador, setContador] = useState(initial)

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-3">
            <div className="input-group number-spinner">
              <span className="input-group-btn data-dwn">
                <button className="btn btn-default btn-primary" data-dir="dwn" onClick={() => setContador(contador-1)} disabled={contador === 0 && true}>
                  <span className="bx bx-minus"></span>
                </button>
              </span>
              <input
                type="text"
                className="form-control text-center"
                value={contador}
              />
              <span className="input-group-btn data-up">
                <button className="btn btn-default btn-primary" data-dir="up" onClick={() => setContador(contador+1)} disabled={contador >= stock && true}>
                  <span className="bx bx-plus"></span>
                </button>
              </span>
            </div>
            
            <button id="btnAgregarCarrito" className="btn btn-outline-primary mt-3 col" disabled={contador > stock && true} onClick={() => onAdd(contador)}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
