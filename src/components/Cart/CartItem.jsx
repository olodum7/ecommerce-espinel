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
            <p
              style={{
                fontSize: ".8em",
                lineHeight: "1.35em",
              }}
            >
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </td>
    <td data-th="Price">$ {item.price}</td>
    <td data-th="Quantity">{item.cantidadPersonas}</td>
    <td data-th="Subtotal" className="text-center">
      $ {item.price * item.cantidadPersonas}
      {/* <span style={{ display: "none" }}>
        {(total += item.price * item.cantidadPersonas)}
      </span> */}
    </td>
    <td className="actions" data-th="">
      <button
        className="btn btn-danger btn-sm"
        onClick={() => removeItem(item.id)}
      >
        <i
          className="bx bxs-trash-alt"
          style={{
            fontSize: ".8em",
          }}
        ></i>
      </button>
    </td>
  </tr>
  </>
  )
}

export default CartItem