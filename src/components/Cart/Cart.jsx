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

            <div className="row">
            <h5 className="mt-5 compra-hecha text-center">
            Tu número de orden de compra es:
            <span>
                {orderID}
              </span>
            </h5>

          </div>

            <Link to={"/"} className="btn compra-hecha-boton mt-5" onClick={clear}>
              <i className="fa fa-angle-left"></i> Volver a la tienda
            </Link>
          </>
        ) : (
          <>
            {carrito.length > 0 ? (
              <>
                <h3 className="mt-5 mb-5 checkout-titulo">Checkout</h3>
                <div className="row">
                  <div className="col-12 col-md-4 bg-default text-left">
                    <Checkout carrito={carrito} total={total} />
                  </div>
                  <div className="col-12 col-md-8">
                    <table id="cart" className="table table-hover text-left">
                      <thead>
                        <tr className="cart-encabezado">
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
                              className="btn-group cart-botones-auxiliares"
                              role="group"
                              aria-label="Basic example"
                            >
                              <Link to={"/"} className="btn btn-outline-info">
                               Continuar comprando
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
                          <td></td>
                          <td colspan="2" className="hidden-xs text-left cart-total">
                            <strong>Total: $ {total}</strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="mb-5 sin-compra">
                  No tienes ninguna compra cargada
                </h3>
                <Link to={"/"} className="btn sin-compra-boton mt-4">
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
