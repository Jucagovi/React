import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Add.css";
import { basedatos } from "../firebase.js";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

// En la base de datos tengo un JSON con la estructura de "Curso".
// La idea es crear una práctica (objeto) y meterla en el Array "practicas" del objeto "Curso".

const curso = {
  id: "21-22DAW",
  curso: "2021/22",
  modulo: "DAW",
  practicas: [
    {
      id: 1,
      orden: 1,
      titulo: "Práctica de prueba",
      numero: "1.1",
      peso: 10,
      evaluacion: 1,
    },
    {
      id: 2,
      orden: 2,
      titulo: "Práctica de prueba 2",
      numero: "1.2",
      peso: 10,
      evaluacion: 1,
    },
    {
      id: 3,
      orden: 3,
      titulo: "Práctica de prueba 3",
      numero: "1.3",
      peso: 40,
      evaluacion: 1,
    },
  ],
};

// Estado inicial del objeto "practica".
const initialState = {
  id: 0,
  orden: 0,
  titulo: "",
  numero: "",
  peso: 0,
  evaluacion: 0,
};

//const guardarPractica = async (practica) => {};

const Add = () => {
  // Estado del componente
  const [state, setState] = useState(initialState);
  // Decontruyendo el objeto "state" en variables separadas.
  const { id, orden, titulo, numero, peso, evaluacion } = state;

  // Funciones para los manejadores

  const guardarPractica = async (e) => {
    // Evito en comportamiento por defecto
    e.preventDefault();
    // Compruebo los valores del estado (values de formulario)
    if (!id || !orden || !titulo || !numero || !peso || !evaluacion) {
      toast.error("Por favor, complete todos los campos.");
    } else {
      // Apunto hacia la colección
      const colPracticas = collection(basedatos, "practicas");
      //const guardado = await addDoc(colPracticas, curso);
      const id = "DkoHX6bZY0MAtW8wpjtT";
      const guardado = await updateDoc(doc(colPracticas, id), {
        practicas: arrayUnion(state),
      });
      if (!guardado) {
        toast.error(
          "Se ha producido un error mientras se guardaba la práctica."
        );
      } else {
        toast.info(`Guardada la práctica con id ${guardado.id}`);
        console.log(`Guardada la práctica con id ${guardado.id}`);
        console.log(guardado);
      }
    }
    /* console.log(curso.practicas.length);
    curso.practicas.push(state);
    console.log(curso); */
  };

  // Actualizar el estado del componente cada vez que se cambie un input.
  // Problema con el tipo de datos: input siempre será string.
  //  -> Para solucinarlo se debe convertir el tipo al meterlo en el state
  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    if (name === "id" || name === "orden" || name === "peso") {
      setState({ ...state, [name]: Number(value) });
    } else {
      setState({ ...state, [name]: value });
    }
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

          <label htmlFor="modulo">Id de la práctica</label>
          <input
            type="number"
            id="id"
            name="id"
            placeholder=""
            value={id}
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

          <label htmlFor="peso">Peso de la práctica</label>
          <input
            type="number"
            id="peso"
            name="peso"
            placeholder=""
            value={peso}
            onChange={cambiarEstado}
          ></input>

          <label htmlFor="evaluacion">Evaluación de la práctica</label>
          <input
            type="text"
            id="evaluacion"
            name="evaluacion"
            placeholder=""
            value={evaluacion}
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
