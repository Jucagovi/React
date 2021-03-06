import { collection, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { basedatos } from "../firebase";

const NotasContexto = createContext();

const NotasProveedor = (props) => {
  const moduloInicial = null;
  const idPracticaInicial = null;
  const practicaInicial = {
    id: 0,
    evaluacion: 0,
    numero: "",
    orden: 0,
    peso: 0,
    titulo: "",
  };
  /*****************************************
     Estados del contexto 
   *****************************************/
  const [modulos, setModulos] = useState(null);
  const [idModulo, setIdModulo] = useState(moduloInicial);
  const [practicas, setPracticas] = useState(null);
  const [idPractica, setIdPractica] = useState(idPracticaInicial);
  const [numeroPractica, setNumeroPractica] = useState(null);
  const [practica, setPractica] = useState(practicaInicial);
  const [notas, setNotas] = useState(null);
  const [discentes, setDiscentes] = useState(null);
  const [listadoNotas, setListadoNotas] = useState(null);

  /*****************************************
     Funciones del contexto 
   *****************************************/

  // NOTA -> Quitar el onSnapshot por un listado normal.
  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
    });
  };

  const obtenerPracticas = async () => {
    await onSnapshot(doc(collection(basedatos, "modulos"), idModulo), (doc) => {
      setPracticas(doc.data().practicas);
    });
  };

  const obtenerDiscentes = async () => {
    await onSnapshot(doc(collection(basedatos, "modulos"), idModulo), (doc) => {
      setDiscentes(doc.data().discentes);
    });
  };

  const guardarDiscentes = async (notas) => {
    console.log("Desde notasContexto");
    console.log(discentes);
    // Revisar el porqué no me deja hacerlo con el estado discentes (que es como se debería hacer).
    await updateDoc(doc(collection(basedatos, "modulos"), idModulo), {
      discentes: notas,
    });
    toast.info(`Notas guardadas para el módulo de ${idModulo}.`);
  };

  const datos = {
    modulos,
    setModulos,
    idModulo,
    setIdModulo,
    idPractica,
    setIdPractica,
    numeroPractica,
    setNumeroPractica,
    practicas,
    setPracticas,
    practica,
    setPractica,
    notas,
    listadoNotas,
    setListadoNotas,
    discentes,
    setDiscentes,
    setNotas,
    obtenerModulos,
    obtenerPracticas,
    obtenerDiscentes,
    guardarDiscentes,
  };

  return (
    <NotasContexto.Provider value={datos}>
      {props.children}
    </NotasContexto.Provider>
  );
};

export { NotasProveedor };
export default NotasContexto;
