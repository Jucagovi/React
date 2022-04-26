import React, { createContext, useState } from "react";
import { basedatos } from "../firebase.js";
import {
  doc,
  collection,
  updateDoc,
  arrayUnion,
  Timestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const NotasContext = createContext();
const valorInicial = "";
const valoresIniciales = {
  nombre: "",
  abreviatura: "",
  curso: "",
  discentes: [{}],
  practicas: [{}],
};

const NotasProveedor = (props) => {
  const [idModulo, setIdModulo] = useState(valorInicial);
  const [modulos, setModulos] = useState("");
  const [modulo, setModulo] = useState(valoresIniciales);

  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
      // Eliminar dependencia de Firebase (pasar un objeto puro JSON al estado).
      //console.log(modulosListado.docs[0].data());
    });
  };

  const prueba = "Fea";
  const funPrueba = () => {
    console.log("Esto es la función prueba");
  };

  const datos = {
    prueba,
    funPrueba,
    idModulo,
    setIdModulo,
    valorInicial,
    valoresIniciales,
    modulos,
    setModulos,
    modulo,
    setModulo,
    obtenerModulos,
  };

  return (
    <NotasContext.Provider value={datos}>
      {props.children}
    </NotasContext.Provider>
  );
};

export default NotasContext;
export { NotasProveedor };
