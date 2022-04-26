import React, { useContext, useReducer } from "react";
import types from "./types";
import Contexto, { ContextoContadores } from "./Contexto";

const Contador2 = () => {
  const { contador2, contador2Dispatch } = useContext(ContextoContadores);
  return (
    <React.Fragment>
      <div>
        <h2>Contador 2: {contador2}</h2>
        <button
          onClick={(e) => {
            contador2Dispatch({
              type: types.multiplicar,
              payload: e.target.outerText,
            });
          }}
        >
          Multiplicar
        </button>
        <button
          onClick={(e) => {
            contador2Dispatch({
              type: types.dividir,
              payload: e.target.outerText,
            });
          }}
        >
          Dividir
        </button>
        <button
          onClick={(e) => {
            contador2Dispatch({
              type: types.reiniciar,
              payload: e.target.outerText,
            });
          }}
        >
          Reiniciar
        </button>
      </div>
    </React.Fragment>
  );
};

export default Contador2;
