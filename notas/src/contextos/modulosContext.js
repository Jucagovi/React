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

const ModulosContext = createContext();
const valorInicial = "";
const valoresIniciales = {
  nombre: "",
  abreviatura: "",
  curso: "",
  discentes: [],
  practicas: [],
};

const ModulosProveedor = (props) => {
  /**************************************
   * Estados para <ModulosPagina />
   ***************************************/
  const [idModulo, setIdModulo] = useState(valorInicial);
  const [modulos, setModulos] = useState("");
  const [modulo, setModulo] = useState(valoresIniciales);

  /**************************************
   * Funciones a ordenar
   ***************************************/

  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
      // Eliminar dependencia de Firebase (pasar un objeto puro JSON al estado).
      //console.log(modulosListado.docs[0].data());
    });
  };

  const datos = {
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
    <ModulosContext.Provider value={datos}>
      {props.children}
    </ModulosContext.Provider>
  );
};

export default ModulosContext;
export { ModulosProveedor };
