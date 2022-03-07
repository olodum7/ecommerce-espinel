import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFireStore from "../../hooks/useFireStore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const {individual, cargando, getIndividualData} = useFireStore();

  useEffect(() => {
    getIndividualData({id});
  }, [])
  
  return (
    <>
      {cargando ? <h2 className="mt-5">Cargando...</h2> : <ItemDetail key={individual.id} producto={individual} />}
    </>
  );
};

export default ItemDetailContainer;
