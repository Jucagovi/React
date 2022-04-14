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

const estadoInicial = {
  nota: 0,
  numero: "0",
};

// Generación de número aleatorio.
const feo = Timestamp.now().toMillis() % 10000000;
console.log(feo);

function AddNota() {
  const [nota, setNota] = useState(estadoInicial);
  console.log(modulo);
  return (
    <React.Fragment>
      <h1>Notas</h1>
    </React.Fragment>
  );
}

export default AddNota;
