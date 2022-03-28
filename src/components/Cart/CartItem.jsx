import { useContext } from "react";
import { CarritoContext } from "../../context/CartContext";

const CartItem = ({ item }) => {

  const { removeItem } = useContext(CarritoContext);

  return (
      <>
    <tr>
    <td data-th="Product">
      <div className="row">
        <div className="col-sm-3">
          <img
            src={item.pictureURL}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-8 d-flex align-items-center">
          <div className="description">
            <h5 className="nomargin">{item.title}</h5>
            <p>
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </td>
    <td data-th="Price" className="cart-precio">$ {item.price}</td>
    <td data-th="Quantity" className="cart-personas">{item.cantidadPersonas}</td>
    <td data-th="Subtotal" className="text-center cart-subtotal">
      $ {item.price * item.cantidadPersonas}
    </td>
    <td className="actions" data-th="">
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeItem(item.id)}
      >
        <i
          className="bx bxs-trash-alt"
        ></i>
      </button>
    </td>
  </tr>
  </>
  )
}

export default CartItem