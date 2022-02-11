import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const data = [
        {
            id: 1,
            title: "España",
            subtitle: "Excursión ecuestre por el campo",
            extract: "Paseo a caballo en la naturaleza por la mañana, después de montar un almuerzo español casero en el jardín, por la tarde para relajarse junto a la piscina o en el jardín. Paseo matutino de día 2 hasta la cima de la montaña El Hacho con vistas espectaculares sobre Álora y el paisaje. Otras cosas a tener en cuenta El paseo y los caballos son adecuados tanto para principiantes como para jinetes experimentados, por lo que ofrecemos ambas posibilidades. El viaje y los caballos se adaptarán a tus habilidades de equitación y tenemos buenas sillas de montar, etc. Se proporcionan cascos de equitación y son obligatorios.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            price: 566,
            pictureURL:
              "https://a0.muscache.com/im/pictures/cd0b56b6-867d-43ba-8a0a-8710c0640182.jpg",
          }
      ];
    
      const [productos, setProductos] = useState(null);
    
      useEffect(() => {
        const item = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(data[0]);
          }, 2000);
  
        });
    
        item
          .then((result) => {
            setProductos(result);
          })
          .catch((err) => {
            console.log(err);
          });
  
      }, []);
  


  return <>
    {productos && <ItemDetail key={productos.id} producto={productos}/>}
  </>
}

export default ItemDetailContainer;