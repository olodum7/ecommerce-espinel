import React from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../UI/PageNotFound";
import Item from "./Item";

const ItemList = ({ items, categoria }) => {
  const { id } = useParams();
  return (
    <div className="row justify-content-center">
      {items &&
        items
          .filter((item) => item.category == categoria)
          .map((item) => <Item key={item.id} item={item} />)}
      {(items.find((item) => item.category === id )) === undefined && id !== undefined && <PageNotFound error='Categoría'/>}
      {id === undefined &&
        items &&
        items.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
