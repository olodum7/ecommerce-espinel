import React from "react";
import { useContext } from "react";
import { CarritoContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { carrito, removeItem, clear } = useContext(CarritoContext);

  let total = 0;

  return (
    <>
      <div className="container mb-5">
        <h3 className="mt-5 mb-5">Carrito</h3>
        <table id="cart" className="table table-hover text-left">
          <thead>
            <tr className="bg-warning text-dark">
              <th style={{ width: "43%" }}>Experiencia</th>
              <th style={{ width: "10%" }}>Precio</th>
              <th style={{ width: "15%" }}>Cantidad de personas</th>
              <th style={{ width: "22%" }} className="text-center">
                Subtotal
              </th>
              <th style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-4">
                      <img src={item.pictureURL} className="img-fluid" />
                    </div>
                    <div className="col-sm-8">
                      <h4 className="nomargin">{item.title}</h4>
                      <p style={{ fontSize: ".8em", lineHeight: "1.35em" }}>
                        {item.extract}
                      </p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">$ {item.price}</td>
                <td data-th="Quantity">{item.cantidadPersonas}</td>
                <td data-th="Subtotal" className="text-center">
                  $ {item.price * item.cantidadPersonas}
                  <span style={{ display: "none" }}>
                    {(total += item.price * item.cantidadPersonas)}
                  </span>
                </td>
                <td className="actions" data-th="">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeItem(item.id)}
                  >
                    <i className="bx bxs-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>
                <Link to={"/"} className="btn btn-outline-info">
                  <i className="fa fa-angle-left"></i> Continuar comprando
                </Link>{" "}
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => clear()}
                >
                  Vaciar carrito
                </button>
              </td>
              <td colspan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total $ {total}</strong>
              </td>
              <td>
                <Link to={"/"} className="btn btn-success btn-block">
                  Checkout <i className="fa fa-angle-right"></i>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default Cart;
