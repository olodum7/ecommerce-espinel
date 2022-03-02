import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs } from "firebase/firestore";
import db from "../../service/firebase";

const ItemListContainer = ({ greetings }) => {
  const { id } = useParams();

  const [aventuras, setAventuras] = useState(null);

  const [cargando, setCargando] = useState(true);

  // Implementando firebase
  const getData = async () => {
    try {
      const data = collection(db, "experiencias");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setAventuras(result);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <h3 className="mt-5">{greetings}</h3>
      <h6>
        {id ? "Categoria " : ""} {id}
      </h6>
      <div class="container mb-5">
        {cargando && <h2 className="mt-5">Cargando...</h2>}
        <ItemList items={aventuras} categoria={id} />
      </div>
    </main>
  );
};
//<ItemCount stock={7} initial={0} onAdd={onAdd} />
export default ItemListContainer;
