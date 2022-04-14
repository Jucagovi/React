import React, { useState } from "react";
import { basedatos } from "../firebase.js";
import {
  doc,
  collection,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { modulo } from "../modulo.js";
import "./AddNota.css";

const estadoInicial = {
  nota: 0,
  numero: "0",
};

modulo.discentes[1].notas.map((elemento) => {
  //console.log(elemento);
});

// Generación de número aleatorio.
const feo = Timestamp.now().toMillis() % 10000000;
//console.log(feo);

function AddNota() {
  const [calificacion, setCalificacion] = useState(estadoInicial);
  const { nota, numero } = calificacion;

  const guardarNota = (e) => {
    modulo.discentes[1].notas.push(calificacion);
    toast.info(
      `Nota introducide de forma correcta para ${modulo.discentes[1].nombre}`
    );
  };

  const actualizarNota = (indice, practica, nota) => {
    //console.log(modulo.discentes[indice]);
    //console.log(`${indice} -- ${practica} -- ${nota}`);
    const aux = {
      numero: `${practica}`,
      nota: `${Number(nota)}`,
    };
    //console.log(aux);
    modulo.discentes[indice].notas.push(aux);
    console.log(modulo);
  };

  const eventoNota = (e) => {
    const { name, value } = e.target;
    if (name === "nota") {
      setCalificacion({ ...calificacion, [name]: Number(value) });
    } else {
      setCalificacion({ ...calificacion, [name]: value });
    }
    console.log(calificacion);
  };

  return (
    <React.Fragment>
      <h1>Notas</h1>
      <div>
        {modulo.discentes.map((discente, indice) => {
          return (
            <div key={discente.id}>
              {discente.nombre} {discente.apellidos} -- 1.7 --{" "}
              <input id={discente.id} name="nota" type="number" /> --
              <input
                type="button"
                value="Guardar"
                onClick={() =>
                  actualizarNota(
                    indice,
                    "1.4",
                    document.getElementById(discente.id).value
                  )
                }
              />
            </div>
          );
        })}
      </div>
      <div>
        {modulo.discentes.map((e) => {
          return (
            <div key={e.id}>
              <div>
                {e.id} -- {e.nombre} -- {e.apellidos}
              </div>
              <div>
                {e.notas.map((ele) => {
                  return (
                    <div>
                      {ele.numero} -- {ele.nota}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <form className="formulario">
          <label htmlFor="titulo">Número de la práctica</label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder=""
            value={numero}
            onChange={eventoNota}
          ></input>

          <label htmlFor="nota">Nota de la práctica</label>
          <input
            type="number"
            id="nota"
            name="nota"
            placeholder=""
            value={nota}
            onChange={eventoNota}
          ></input>
          <input type="button" value="Guardar" onClick={guardarNota}></input>
        </form>
      </div>

      <pre>{JSON.stringify(calificacion, null, 2)}</pre>
    </React.Fragment>
  );
}

export default AddNota;
