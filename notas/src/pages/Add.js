import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Add.css";
import { basedatos } from "../firebase.js";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

const initialState = {
  modulo: "",
  orden: "",
  titulo: "",
  numero: "",
  cursos: [],
};
// Objeto de prueba
const feo = {
  modulo: "DAW",
  orden: "2",
  titulo: "Práctica de prueba",
  numero: "0.1",
  cursos: ["2020/21", "2021/22"],
  direccion: [
    { calle: "Elm street", numero: "34", ciudad: "Pensilvania" },
    { calle: "Pasos", numero: "55", ciudad: "Elda" },
  ],
};

//const guardarPractica = async (practica) => {};

const Add = () => {
  // Estado del componente
  const [state, setState] = useState(initialState);
  // Decontruyendo el objeto "state" en variables separadas.
  const { modulo, orden, titulo, numero, cursos } = state;

  // Funciones para los manejadores
  const guardarPractica = async (e) => {
    // Evito en comportamiento por defecto
    e.preventDefault();
    // Compruebo los valores del estado (values de formulario)
    if (!modulo || !orden || !titulo || !numero || !cursos) {
      toast.error("Por favor, complete todos los campos.");
    } else {
      // Apunto hacia la colección
      const colPracticas = collection(basedatos, "practicas");
      const guardado = await addDoc(colPracticas, state);
      //const guardado = await addDoc(colPracticas, feo);
      if (!guardado) {
        toast.error(
          "Se ha producido un error mientras se guardaba la práctica."
        );
      } else {
        toast.done(`Guardada la práctica con id ${guardado.id}`);
        console.log(`Guardada la práctica con id ${guardado.id}`);
      }
    }
  };

  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    //setState({ ...state, [name]: value });
    setState(feo);
    console.log(state);
  };

  return (
    <React.Fragment>
      <h2>Añadir práctica</h2>
      <div className="cont_practicas">
        <form className="formulario" onSubmit={guardarPractica}>
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

          <label htmlFor="orden">Orden de la práctica</label>
          <input
            type="number"
            id="orden"
            name="orden"
            placeholder=""
            value={orden}
            onChange={cambiarEstado}
          ></input>

          <label htmlFor="anos">Curso de la práctica </label>
          <input
            type="text"
            id="cursos"
            name="cursos"
            placeholder=""
            value={cursos}
            onChange={cambiarEstado}
          ></input>

          <input type="submit" value="Guardar"></input>
        </form>
        <pre id="codigo">{JSON.stringify(state, null, 2)}</pre>
      </div>
    </React.Fragment>
  );
};

export default Add;
