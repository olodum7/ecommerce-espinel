import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [productos, setProductos] = useState(null);

  const [cargando, setCargando] = useState(true);

  // Implementando firebase
  const getData = async () => {
    try {
      const data = collection(db, "experiencias");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setProductos(result[id - 1]);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {cargando && <h2 className="mt-5">Cargando...</h2>}
      {productos && <ItemDetail key={productos.key} producto={productos} />}
    </>
  );
};

export default ItemDetailContainer;
