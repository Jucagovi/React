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
        /* await updateDoc(doc(collection(basedatos, "modulos"), idModulo), datos);
        toast.info("Documento actualizado correctamente.");
        setIdModulo(null); */
      } else {
        /* La actualización de forma ordenada:  
        const coleccion = collection(basedatos, "modulos");
        const referencia = doc(coleccion, idModulo);
        const resultado = await updateDoc(referencia, {
          discentes: arrayUnion(discente),
        }); */

        const resultado = await updateDoc(
          doc(collection(basedatos, "modulos"), idModulo),
          { discentes: arrayUnion(discente) }
        );
        //const resultado = await addDoc(collection(basedatos, "modulos"), datos);

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
  };
  return (
    <DiscentesContexto.Provider value={datos}>
      {props.children}
    </DiscentesContexto.Provider>
  );
};

export { DiscentesProveedor };
export default DiscentesContexto;
