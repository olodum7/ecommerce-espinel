import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import useFireStore from "../../hooks/useFireStore";
import Carousel from "../Carousel/Carousel";
import Loader from "../UI/Loader";

const ItemListContainer = ({ greetings }) => {
  const { id } = useParams();

  const { experiencias, cargando, getData } = useFireStore();

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Carousel />
      <div className="container mb-5 main-container">
        <div className="row justify-content-center saludo">
          <div className="col-10 col-md-4">
            <h3 className="mt-5">{greetings}</h3>
          </div>
        </div>

        {cargando && <Loader />}
        <ItemList items={experiencias} categoria={id} />
      </div>
    </main>
  );
};

export default ItemListContainer;
