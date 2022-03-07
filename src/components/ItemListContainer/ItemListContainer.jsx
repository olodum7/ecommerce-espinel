import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import useFireStore from "../../hooks/useFireStore";

const ItemListContainer = ({ greetings }) => {
  const { id } = useParams();

  const { experiencias, cargando, getData } = useFireStore();

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
        <ItemList items={experiencias} categoria={id} />
      </div>
    </main>
  );
};

export default ItemListContainer;
