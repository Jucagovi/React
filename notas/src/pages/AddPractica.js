import React, { useState } from "react";
import "./AddPractica.css";
import { basedatos } from "../firebase.js";
import { toast } from "react-toastify";
import {
  collection,
  updateDoc,
  doc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";

// Temporal hasta que haga el menú de selección del módulo.
const id = "l1IhRN3ti7rCsqpbpBd4";

// Estado inicial del objeto "practica".
const estadoInicial = {
  id: 0,
  orden: 0,
  titulo: "",
  numero: "",
  peso: 0,
  evaluacion: 0,
};

const id_aleatorio = Timestamp.now().toMillis() % 1000000;

const AddPractica = () => {
  // Estado del componente.
  const [practica, setPractica] = useState(estadoInicial);
  // Decontruyendo el objeto "state" en variables separadas.
  const { id, orden, titulo, numero, peso, evaluacion } = practica;

  // *** Funciones para los manejadores *****************
  const guardarPractica = async (e) => {
    // Evito en comportamiento por defecto.
    e.preventDefault();
    // Compruebo los valores del estado (values de formulario).
    if (!id || !orden || !titulo || !numero || !peso || !evaluacion) {
      toast.error("Por favor, complete todos los campos.");
    } else {
      // Apunto hacia la colección.
      const colPracticas = collection(basedatos, "modulos");
      // Guardo (actualizo el array) la práctica en Firestore.
      /* const guardado = await updateDoc(doc(colPracticas, id), {
        practicas: arrayUnion(state),
      }); */
      updateDoc(doc(colPracticas, id), { practicas: arrayUnion(practica) })
        .then((datos) => {
          toast.info(`Guardada la práctica con id ${datos.id}`);
          console.log(`Guardada la práctica con id ${datos}`);
        })
        .catch(() => {
          toast.error(
            "Se ha producido un error mientras se guardaba la práctica."
          );
        });
      /*   
      if (!guardado) {
        toast.error(
          "Se ha producido un error mientras se guardaba la práctica."
        );
      } else {
        toast.info(`Guardada la práctica con id ${guardado.id}`);
        console.log(`Guardada la práctica con id ${guardado.id}`);
      } */
    }
  };

  // Actualizar el estado del componente cada vez que se cambie un input.
  // Problema con el tipo de datos: input siempre será string.
  //  -> Para solucinarlo se debe convertir el tipo al meterlo en el state
  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    // Modifico el objeto de estado (sólo el valor necesario).
    practica.id = id_aleatorio;
    // Inmediatamente modifico el estado con el objeto modificado para que se redibuje el componente.
    setPractica(practica);
    // Cambio la parte del estado a la que apunta el formulario.
    if (name === "id" || name === "orden" || name === "peso") {
      setPractica({ ...practica, [name]: Number(value) });
    } else {
      setPractica({ ...practica, [name]: value });
    }
    console.log(practica);
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
        <pre id="codigo">{JSON.stringify(practica, null, 2)}</pre>
      </div>
    </React.Fragment>
  );
};

export default AddPractica;
