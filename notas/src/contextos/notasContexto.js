import { collection, doc, onSnapshot } from "firebase/firestore";
import { createContext, useState } from "react";
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
  let listadoNotas = null;
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

  // Crea un objeto a partir de los dos estados (discentes y notas) para crear un tercer estado (listadoNotas) que controle el formulario de notas.
  const listarNotas = () => {
    const listadoNotas = discentes.map((discente) => {
      let nota;
      discente.notas.map((n) => {
        if (n.numero === numeroPractica) {
          nota = n.nota;
        }
      });
      return {
        id: discente.id,
        nombre: discente.nombre,
        apellidos: discente.apellidos,
        numero: numeroPractica,
        nota: nota,
      };
    });
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
    discentes,
    setDiscentes,
    setNotas,
    obtenerModulos,
    obtenerPracticas,
    obtenerDiscentes,
    listarNotas,
  };

  return (
    <NotasContexto.Provider value={datos}>
      {props.children}
    </NotasContexto.Provider>
  );
};

export { NotasProveedor };
export default NotasContexto;
