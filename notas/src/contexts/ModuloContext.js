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

const ModuloContext = createContext();
const valorInicial = "";
const valoresIniciales = {
  nombre: "",
  abreviatura: "",
  curso: "",
  discentes: [{}],
  practicas: [{}],
};

const ModuloProveedor = (props) => {
  const [idModulo, setIdModulo] = useState(valorInicial);
  const [modulos, setModulos] = useState("");

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
    obtenerModulos,
  };

  return (
    <ModuloContext.Provider value={datos}>
      {props.children}
    </ModuloContext.Provider>
  );
};

export default ModuloContext;
export { ModuloProveedor };
