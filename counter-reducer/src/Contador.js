import React, { useContext } from "react";
import types from "./types";
import { ContextoContadores } from "./Contexto";

const Contador = () => {
  const { contador, contadorDispatch } = useContext(ContextoContadores);

  return (
    <React.Fragment>
      <div>
        <h2>Clicks: {contador}</h2>
        <button
          onClick={(e) => {
            contadorDispatch({
              type: types.aumentar,
              payload: e.target.outerHTML,
            });
          }}
        >
          Aumentar
        </button>
        <button
          onClick={(e) => {
            contadorDispatch({
              type: types.disminuir,
              payload: e.target.outerHTML,
            });
          }}
        >
          Dismimuir
        </button>
        <button
          onClick={(e) => {
            contadorDispatch({
              type: types.reiniciar,
              payload: e.target.outerHTML,
            });
          }}
        >
          Reiniciar
        </button>
      </div>
    </React.Fragment>
  );
};

export default Contador;
