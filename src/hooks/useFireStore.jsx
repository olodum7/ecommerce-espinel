import { collection, addDoc, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import { useState, useContext } from "react";
import db from "../service/firebase";
import { CarritoContext } from "../context/CartContext";

const useFireStore = () => {

  const [experiencias, setExperiencias] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [individual, setIndividual] = useState({});
  const [proximamente, setProximamente] = useState([]);

  const { setOrderID } = useContext(CarritoContext);

  // Obteniendo experiencias
  const getData = async () => {
    setCargando(true);
    try {
      const data = collection(db, "experiencias");
      const col = await getDocs(data);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setExperiencias(result);
      setCargando(false);
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

    // Obteniendo coming soon
    const getComingSoon = async () => {
      try {
        const data = collection(db, "comingsoon");
        const col = await getDocs(data);
        const result = col.docs.map(
          (doc) => (doc = { id: doc.id, ...doc.data() })
        );
        setProximamente(result);
      } catch (error) {
        console.log(error);
      }
    };

  // Obteniendo experiencia individual
  const getIndividualData = async ({ id }) => {
    setCargando(true);
    try {
      const document = doc(db, "experiencias", id);
      const response = await getDoc(document);
      const result = { id: response.id, ...response.data() };
      setIndividual(result);
      setCargando(false);
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  // Generando orden
  const generateOrder = async ({ datos }) => {
    setCargando(true);
    try {
      const col = collection(db, "ordenes");
      const order = await addDoc(col, datos);
      setCargando(false);
      setOrderID(order.id)
    } catch (error) {
      console.log(error);
      setCargando(false);
    }
  };

  // Actualizando stock después de hecha compra
  const actualizarStock = async ({id, stock, quantity}) => {
      const document = doc(db, "experiencias", id);
      try {
          await updateDoc(document, {stock: stock - quantity})
          console.log("Se actualizo correctamente")
      } catch (error) {
          console.log(error)          
      }
  }

  return {
    getData,
    getIndividualData,
    generateOrder,
    actualizarStock,
    getComingSoon,
    cargando,
    individual,
    experiencias,
    proximamente,
  };
};

export default useFireStore;
