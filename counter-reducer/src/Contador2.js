import React, { useReducer } from "react";
import contador2Reducer, { estadoInicial2, types } from "./contador2Reducer";

const Contador2 = () => {
  const [contador2, contador2Dispatch] = useReducer(
    contador2Reducer,
    estadoInicial2
  );
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
