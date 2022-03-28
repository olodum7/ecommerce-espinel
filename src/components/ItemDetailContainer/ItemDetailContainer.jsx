import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFireStore from "../../hooks/useFireStore";
import Loader from "../UI/Loader";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const {individual, cargando, getIndividualData} = useFireStore();

  useEffect(() => {
    getIndividualData({id});
  }, [])
  
  return (
    <>
      {cargando ? <Loader/> : <ItemDetail key={individual.id} producto={individual} />}
    </>
  );
};

export default ItemDetailContainer;
