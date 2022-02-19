import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const data = [
    {
      id: 1,
      title: "España",
      subtitle: "Excursión ecuestre por el campo",
      extract:
        "Paseo a caballo en la naturaleza por la mañana, después de montar un almuerzo español casero en el jardín, por la tarde para relajarse junto a la piscina o en el jardín. Paseo matutino de día 2 hasta la cima de la montaña El Hacho con vistas espectaculares sobre Álora y el paisaje. Otras cosas a tener en cuenta El paseo y los caballos son adecuados tanto para principiantes como para jinetes experimentados, por lo que ofrecemos ambas posibilidades. El viaje y los caballos se adaptarán a tus habilidades de equitación y tenemos buenas sillas de montar, etc. Se proporcionan cascos de equitación y son obligatorios.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 566,
      pictureURL:
        "https://a0.muscache.com/im/pictures/cd0b56b6-867d-43ba-8a0a-8710c0640182.jpg",
    },
    {
      id: 2,
      title: "Italia",
      subtitle: "Sibillini Wild E-Bike Adventure",
      extract:
        "Non c’è modo migliore per scoprire le infinite meraviglie e i paesaggi di straordinaria bellezza del Parco Nazionale dei Monti Sibillini che una due giorni in sella a una MTB elettrica, accompagnato in tutta sicurezza da una guida cicloturistica ufficiale della Regione Marche. Un’avventura alla portata di tutti, immersi nella natura incontaminata del Parco, tra vette, cime mozzafiato e luoghi meravigliosi come il famoso Santuario di Macereto e il lago di Fiastra. Pernotteremo in un rifugio di montagna sotto le stelle a 1850 metri.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 397,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1493521-poster/original/493ffa1d-4365-46b9-8cdd-118a712d154e.jpeg",
    },
    {
      id: 3,
      title: "Eslovenia",
      subtitle: "Alpine Adventures in Soča Valley",
      extract:
        "We will immerse ourselves into the local culture in one of the most amazing villages in the world. The local culture is adventurous, outdoorsy and rich with history, and we will experience all of this together! I've been a local in this community for the past 7 years and LOVE sharing the best aspects with new friends!",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 572,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1362053-media_library/original/426e4362-5d09-4471-9333-223cbd9def74.jpeg",
    },
    {
      id: 4,
      title: "Suecia",
      subtitle: "En kayak en una isla sueca",
      extract:
        "Team up with a crew of like-minded adventurers for a true wilderness experience! Wild camping permitted anywhere. Your kayaking guides will take you far and wide, teaching flora, fauna & geology along the route. You'll venture far to the outer islands of the archipelago and get close to the amazing bird life in this unusual habitat, if lucky you may even spot seals.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 1023,
      pictureURL:
        "https://a0.muscache.com/im/pictures/6dfb271a-94ee-4d0b-bc0a-01ef887ea128.jpg",
    },
    {
      id: 5,
      title: "Los Ángeles",
      subtitle: "Visita Los Ángeles en un Cadillac descapotable de 1973",
      extract:
        "Yes, everyone drives in Los Angeles, but this experience is nontraditional—in a 1973 Cadillac Eldorado Convertible from my own private collection. We will meet in front of the Urban lights of LACMA and head up to.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 55,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1637355-media_library/original/7b5046ad-f254-49b0-8699-34a77f20e41c.jpeg",
    },
    {
      id: 6,
      title: "Ciudad de México",
      subtitle: "¡Auténtica Street Food de la CDMX!",
      extract:
        "Comenzaremos ésta experiencia adentrándonos en el metro de la ciudad, donde conocerás cómo funciona el transporte público de ésta caótica ciudad. Nos trasladaremos hasta uno de los mercados más tradicionales de la Ciudad de México y comprenderás la importancia de éstos lugares dentro de la comida callejera. Mientras recorremos sus coloridos pasillos donde abundan frutas, verduras, chiles y flores de todo México, haremos distintas paradas donde probarás una versión única de tamales, algunos aperitivos y por supuesto, tacos.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 33,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1032151-media_library/original/bf883420-8e4f-445a-b624-adbae296748d.jpeg",
    },
    {
      id: 7,
      title: "Montevideo",
      subtitle: "Caminatas con historia",
      extract:
       `Viví un cuento a través de murales.
        Viví una experiencia transmedia por el barrio Palermo.
        Disfruta del arte urbano, murales y otras instalaciones artísticas.
        Comenzamos el recorrido encontrandonos en la intendencia de montevideo, en el monumento el David. Luego partimos caminando hacia el barrio Palermo, en el cual pasaremos por la casa del escritor Carlos Onetti y la escuela de Carlos Gardel.
        Bajando por nuestra señora de encina, calle peatonal de cafés y restaurantes con historia afro y pintorescos lugares con callejuelas de adoquin en el corazón de Palermo, hasta la plaza Gomez siendo esta una plaza patrimonio barrial de la época.
        Bajamos por minas hacia la rambla pasando por la casa cultural afro, conociendo su cultura.
        Te permitirá apreciar una innovadora experiencia de un barrio con historia.`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 13,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1338481-media_library/original/51396852-9c71-425d-8e41-1ec0afcc79ab.jpeg",
    },
    {
      id: 8,
      title: "New York",
      subtitle: "Sesión de fotos en Brooklyn Bridge",
      extract:
       `Esta experiencia se lleva a cabo en Brooklyn Bridge Park y Brooklyn Bridge, pero siempre estoy abierto a captar clientes en diferentes ubicaciones a pedido por un cargo adicional. Debido a mi experiencia trabajando codo con codo con modelos y actores, mis clientes aprecian mis instrucciones frente a la cámara. ¡Mi principal prioridad es crear recuerdos duraderos de su viaje a la ciudad de Nueva York mientras agrego un poco de sabor a sus redes sociales! Para mis fotografías, podemos empezar por la mañana en Brooklyn Bridge Park con la mejor luz y menos tráfico.`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: 32,
      pictureURL:
        "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2152652-media_library/original/67c28f3c-9924-498f-b7a2-4095daece0b3.jpeg",
    },
  ];

  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const item = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data[id-1]);
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

  return (
    <>{productos && <ItemDetail key={productos.id} producto={productos} />}</>
  );
};

export default ItemDetailContainer;
