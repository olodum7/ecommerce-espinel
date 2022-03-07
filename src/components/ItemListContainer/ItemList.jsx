import React from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ items, categoria }) => {
  const { id } = useParams();
  return (
    <div className="row mt-5">
      {items &&
        items
          .filter((item) => item.category == categoria)
          .map((item) => <Item key={item.id} item={item} />)}
      {id == undefined &&
        items &&
        items.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
};

export default ItemList;
