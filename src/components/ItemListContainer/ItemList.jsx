import React from "react";
import Item from "./Item";

const ItemList = ({items}) => {
  return <div className="row mt-5">{items && items.map((item) => <Item key={item.id} item={item}/>)}</div>

};

export default ItemList;
