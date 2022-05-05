import {
  arrayUnion,
  collection,
  doc,
  onSnapshot,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { Children, createContext, useState } from "react";
import { toast } from "react-toastify";
import { basedatos } from "../firebase";

const DiscentesContexto = createContext();

const valorInicial = null;
const valoresIniciales = null;
const discentesIniciales = null;
// Se genera un id de forma aleatoria.
const discenteInicial = {
  id: Timestamp.now().toMillis() % 1000000,
  nombre: "",
  apellidos: "",
  repetidor: "",
  notas: [],
};

const DiscentesProveedor = (props) => {
  const [modulos, setModulos] = useState(valoresIniciales);
  const [idModulo, setIdModulo] = useState(valorInicial);
  const [idDiscente, setIdDiscente] = useState(valorInicial);
  const [discente, setDiscente] = useState(discenteInicial);
  const [discentes, setDiscentes] = useState(discentesIniciales);

  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
    });
  };

  const enviarForm = async () => {
    if (!discente.nombre || !discente.apellidos || !discente.repetidor) {
      toast.error("Faltan valores obligatorios.");
    } else {
      if (idDiscente) {
        const nuevosDiscentes = discentes.map((d) => {
          if (d.id === discente.id) {
            return discente;
          } else {
            return d;
          }
        });

        setDiscentes(nuevosDiscentes);
        const resultado = await updateDoc(
          doc(collection(basedatos, "modulos"), idModulo),
          {
            discentes: nuevosDiscentes,
          }
        );
      } else {
        const resultado = await updateDoc(
          doc(collection(basedatos, "modulos"), idModulo),
          { discentes: arrayUnion(discente) }
        );

        toast.info(
          `Discente ${discente.nombre} guardado con el id ${discente.id}`
        );
        setIdDiscente(null);
        // Se actualiza el estado "discente" con un nuevo "id" aleatorio.
        setDiscente({
          id: Timestamp.now().toMillis() % 1000000,
          nombre: "",
          apellidos: "",
          repetidor: "",
          notas: [],
        });
      }
    }
  };

  const borrarDiscente = async () => {
    if (window.confirm(`¿Estás seguro de querer eliminar al discente?`)) {
      const nuevosDiscentes = discentes.filter((d) => d.id !== idDiscente);
      setDiscentes(nuevosDiscentes);
      const resultado = await updateDoc(
        doc(collection(basedatos, "modulos"), idModulo),
        { discentes: nuevosDiscentes }
      );
      setDiscente({
        id: Timestamp.now().toMillis() % 1000000,
        nombre: "",
        apellidos: "",
        repetidor: "",
        notas: [],
      });
      setIdDiscente(null);
    }
  };

  const actualizarDiscente = async () => {};

  const obtenerDiscente = async () => {};
  const datos = {
    obtenerModulos,
    modulos,
    setModulos,
    idModulo,
    setIdModulo,
    discentes,
    setDiscentes,
    idDiscente,
    setIdDiscente,
    discente,
    setDiscente,
    enviarForm,
    discenteInicial,
    borrarDiscente,
    actualizarDiscente,
  };
  return (
    <DiscentesContexto.Provider value={datos}>
      {props.children}
    </DiscentesContexto.Provider>
  );
};

export default DiscentesContexto;
export { DiscentesProveedor };
