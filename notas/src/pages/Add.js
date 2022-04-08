import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Add.css";
import { basedatos } from "../firebase.js";
import { toast } from "react-toastify";

const initialState = {
  modulo: "",
  orden: "",
  titulo: "",
  numero: "",
  anos: [],
};

// Funciones para los manejadores

const guardarPractica = () => {};
const cambiarEstado = () => {};

const Add = () => {
  // Estado del compoinente
  const [state, setState] = useState(initialState);
  // Decontruyendo el objeto "state" en variables separadas.
  const { modulo, orden, titulo, numero, anos } = state;

  return (
    <React.Fragment>
      <h2>Añadir práctica</h2>
      <div className="cont_practicas">
        <form onSubmit={guardarPractica}>
          <label htmlFor="titulo">Título de la práctica</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            placeholder=""
            value={titulo}
            onChange={cambiarEstado}
          ></input>

          <label htmlFor="numero">Número de la práctica</label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder=""
            value={numero}
            onChange={cambiarEstado}
          ></input>

          <label htmlFor="modulo">Módulo de la práctica</label>
          <input
            type="text"
            id="modulo"
            name="modulo"
            placeholder=""
            value={modulo}
            onChange={cambiarEstado}
          ></input>

          <label htmlFor="orden">Número de la práctica</label>
          <input
            type="text"
            id="orden"
            name="orden"
            placeholder=""
            value={orden}
            onChange={cambiarEstado}
          ></input>

          <label htmlFor="anos">Número de la práctica</label>
          <input
            type="text"
            id="anos"
            name="anos"
            placeholder=""
            value={anos}
            onChange={cambiarEstado}
          ></input>

          <input type="submit" value="Guardar"></input>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Add;
