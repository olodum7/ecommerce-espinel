import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings, onAdd }) => {

  const {id} = useParams();

  const data = [
    {
      id: 1,
      title: "España",
      description: "Excursión ecuestre por el campo",
      price: 566,
      pictureURL:
        "https://a0.muscache.com/im/pictures/cd0b56b6-867d-43ba-8a0a-8710c0640182.jpg",
      categoria: 'destacados',
    },
    {
      id: 2,
      title: "Italia",
      description: "Sibillini Wild E-Bike Adventure",
      price: 399,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1493521-poster/original/493ffa1d-4365-46b9-8cdd-118a712d154e.jpeg",
      categoria: 'aventuras',
    },
    {
      id: 3,
      title: "Eslovenia",
      description: "Alpine Adventures in Soča Valley",
      price: 572,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1362053-media_library/original/426e4362-5d09-4471-9333-223cbd9def74.jpeg",
      categoria: 'destacados',
    },
    {
      id: 4,
      title: "Suecia",
      description: "En kayak en una isla sueca",
      price: 1023,
      pictureURL:
        "https://a0.muscache.com/im/pictures/6dfb271a-94ee-4d0b-bc0a-01ef887ea128.jpg",
      categoria: 'aventuras',
    },
    {
      id: 5,
      title: "Los Ángeles",
      description: "Visita Los Ángeles en un Cadillac descapotable de 1973",
      price: 55,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1637355-media_library/original/7b5046ad-f254-49b0-8699-34a77f20e41c.jpeg",
      categoria: 'ciudades',
    },
    {
      id: 6,
      title: "Ciudad de México",
      description: "¡Auténtica Street Food de la CDMX!",
      price: 33,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1032151-media_library/original/bf883420-8e4f-445a-b624-adbae296748d.jpeg",
      categoria: 'ciudades',
    },
    {
      id: 7,
      title: "Montevideo",
      description: "Caminatas con historia",
      price: 13,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1338481-media_library/original/51396852-9c71-425d-8e41-1ec0afcc79ab.jpeg",
      categoria: 'ciudades',
    },
    {
      id: 8,
      title: "New York",
      description: "Sesión de fotos en Brooklyn Bridge",
      price: 32,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2152652-media_library/original/67c28f3c-9924-498f-b7a2-4095daece0b3.jpeg",
      categoria: 'ciudades',
    },
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

  return (
    <main>
      <h3 className="mt-5">{greetings}</h3>
      <h6>{id ? 'Categoria ' : ''} {id}</h6>
      <div class="container mb-5">
        <ItemList items={aventuras} categoria={id}/>
      </div>
      
    </main>
  );
};
//<ItemCount stock={7} initial={0} onAdd={onAdd} />
export default ItemListContainer;
