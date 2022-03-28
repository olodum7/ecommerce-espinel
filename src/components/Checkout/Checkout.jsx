import { useState, useContext } from "react";
import useFireStore from "../../hooks/useFireStore";
import { CarritoContext } from "../../context/CartContext";

const Checkout = ({ carrito, total }) => {
  const { clear } = useContext(CarritoContext);

  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: "",
    date: new Date().toLocaleString(),
    total: total,
  });
  
  const handleChange = (e) => {

    // Filtrado de keys de compra
    carrito.map((elemento) =>
    ["category", "description", "extract", "pictureURL", "stock"].forEach(
      (e) => delete elemento[e]
    )
  );

    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
      items: carrito,
    });
  };

  const { generateOrder } = useFireStore();

  const handleSubmit = (e) => {
    e.preventDefault();

    generateOrder({ datos: form });

    clear();

  };

  return (
    <>
      <h6 className="checkout">Datos</h6>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.buyer.name}
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">*Nombre es requerido.</div>
        </div>

        <div className="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={form.buyer.email}
            placeholder="you@example.com"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">*Un email válido es requerido.</div>
        </div>

        <div className="form-group">
          <label for="phone">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={form.buyer.phone}
            placeholder="099000000"
            onChange={handleChange}
            required
          />
          <div className="invalid-feedback">*Un teléfono es requerido.</div>
        </div>


        <button className="btn bt-lg btn-block mt-5 mb-5 checkout-button" type="submit" disabled={!form.buyer.name || !form.buyer.email || !form.buyer.phone} >
          Comprar
        </button>
      </form>
    </>
  );
};

export default Checkout;
