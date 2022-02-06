import React from 'react';
import ItemCount from './ItemCount';

const ItemListContainer = ({greetings, onAdd}) => {
  return <main>
      <h3 className='mt-5'>{greetings}</h3>
      <ItemCount stock={7} initial={0} onAdd={onAdd}/>
  </main>;
};

export default ItemListContainer;
