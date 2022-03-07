import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import CartItem from "./CartItem";

const Cart = () => {
  const { carrito, clear, orderID } = useContext(CarritoContext);

  let total = 0;
  carrito.map((item) => (total += item.price * item.cantidadPersonas));

  return (
    <>
      <div className="container mb-5" id="checkout">
        {orderID.length > 0 ? (
          <>
            <h2 className="mt-5">¡Muchas gracias por tu compra!</h2>
            <h5 className="mt-3">
              Tu número de orden de compra es:{" "}
              <span
                className="text-primary"
                style={{ fontWeight: 300, display: "inline" }}
              >
                {orderID}
              </span>
            </h5>
            <Link to={"/"} className="btn btn-outline-primary mt-4">
              <i className="fa fa-angle-left"></i> Volver a la tienda
            </Link>
          </>
        ) : (
          <>
            <h3 className="mt-5 mb-5">Checkout</h3>
            {carrito.length > 0 ? (
              <>
                <div className="row">
                  <div className="col-4 bg-default text-left">
                    <Checkout carrito={carrito} total={total} />
                  </div>
                  <div className="col-8">
                    <table id="cart" className="table table-hover text-left">
                      <thead>
                        <tr className="bg-warning text-dark">
                          <th style={{ width: "38%" }}>Experiencia</th>
                          <th style={{ width: "10%" }}>Precio</th>
                          <th style={{ width: "25%" }}>Cantidad de personas</th>
                          <th style={{ width: "22%" }} className="text-center">
                            Subtotal
                          </th>
                          <th style={{ width: "5%" }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {carrito.map((item) => (
                          <CartItem key={item.id} item={item} />
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td style={{ width: "38%" }}>
                            <div
                              class="btn-group"
                              role="group"
                              aria-label="Basic example"
                            >
                              <Link to={"/"} className="btn btn-outline-info">
                                <i className="fa fa-angle-left"></i> Continuar
                                comprando
                              </Link>
                              <button
                                className="btn btn-outline-secondary mx-2"
                                onClick={() => clear()}
                              >
                                Vaciar carrito
                              </button>
                            </div>
                          </td>
                          <td></td>
                          <td colspan="1" className="hidden-xs"></td>
                          <td className="hidden-xs text-center">
                            <strong>Total $ {total}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3>No tienes ninguna compra cargada</h3>
                <Link to={"/"} className="btn btn-outline-primary mt-4">
                  <i className="fa fa-angle-left"></i> Volver a la tienda
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
