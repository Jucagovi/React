import React, { createContext, useReducer } from "react";
import contador2Reducer, { estadoInicial2 } from "./contador2Reducer";
import contadorReducer, { estadoInicial } from "./contadorReducer";

const ContextoContadores = createContext();

const funcionPrueba = (parametro) => {
  console.log(parametro);
};
const idPrueba = 45637;

// Datos que se le pasan al contexto.

const Contexto = (props) => {
  // Estado para contador
  const [contador, contadorDispatch] = useReducer(
    contadorReducer,
    estadoInicial
  );

  // Estado para contador2

  const [contador2, contador2Dispatch] = useReducer(
    contador2Reducer,
    estadoInicial2
  );

  const datos = {
    idPrueba,
    funcionPrueba,
    contador,
    contadorDispatch,
    contador2,
    contador2Dispatch,
  };

  return (
    <ContextoContadores.Provider value={datos}>
      {props.children}
    </ContextoContadores.Provider>
  );
};

export { ContextoContadores };
export default Contexto;
