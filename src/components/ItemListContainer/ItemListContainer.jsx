import React, { useState, useEffect } from "react";
import ItemCount from './ItemCount';
import ItemList from "./ItemList";

const ItemListContainer = ({greetings, onAdd}) => {

    const data = [
      {
        id: 1,
        title: "España",
        description: "Excursión ecuestre por el campo",
        price: 566,
        pictureURL:
          "https://a0.muscache.com/im/pictures/cd0b56b6-867d-43ba-8a0a-8710c0640182.jpg",
      },
      {
        id: 2,
        title: "Italia",
        description: "Sibillini Wild E-Bike Adventure",
        price: 399,
        pictureURL:
          "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1493521-poster/original/493ffa1d-4365-46b9-8cdd-118a712d154e.jpeg",
      },
      {
        id: 3,
        title: "Eslovenia",
        description: "Alpine Adventures in Soča Valley",
        price: 572,
        pictureURL:
          "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1362053-media_library/original/426e4362-5d09-4471-9333-223cbd9def74.jpeg",
      },
      {
        id: 4,
        title: "Suecia",
        description: "En kayak en una isla sueca",
        price: 1023,
        pictureURL:
          "https://a0.muscache.com/im/pictures/6dfb271a-94ee-4d0b-bc0a-01ef887ea128.jpg"
      }
    ];
  
    const [aventuras, setAventuras] = useState(null);
  
    useEffect(() => {
      const items = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);

      });
  
      items
        .then((result) => {
          setAventuras(result);
        })
        .catch((err) => {
          console.log(err);
        });

    }, []);

    
  
  return <main>
      <h3 className='mt-5'>{greetings}</h3>
      <div class="container"><ItemList items={aventuras}/></div>
      <ItemCount stock={7} initial={0} onAdd={onAdd}/>
  </main>;
};

export default ItemListContainer;
