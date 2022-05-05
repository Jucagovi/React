import { collection, doc, onSnapshot, Timestamp } from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { basedatos } from "../firebase";

const valoresIniciales = null;
const valorInicial = null;
const practicaInicial = {
  id: Timestamp.now().toMillis() % 1000000,
  evaluacion: 0,
  numero: "",
  orden: 0,
  peso: 0,
  titulo: "",
};

const PracticasContexto = createContext();

const PrcaticasProveedor = (props) => {
  const [modulos, setModulos] = useState(valoresIniciales);
  const [idModulo, setIdModulo] = useState(valorInicial);
  const [practicas, setPracticas] = useState(valoresIniciales);
  const [practica, setPractica] = useState(practicaInicial);
  const [idPractica, setIdPractica] = useState(valorInicial);

  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
    });
  };

  const obtenerPracticas = async (id) => {
    await onSnapshot(doc(collection(basedatos, "modulos"), id), (doc) => {
      setPracticas(doc.data().practicas);
      console.log(doc.data().practicas);
    });
  };

  const enviarForm = async () => {
    if (!practica.nombre || !practica.apellidos || !practica.repetidor) {
      toast.error("Faltan valores obligatorios.");
    } else {
      if (idPractica) {
        const nuevasPracticas = practicas.map((d) => {
          if (d.id === practica.id) {
            return practica;
          } else {
            return d;
          }
        });

        setPracticas(nuevasPracticas);
        const resultado = await updateDoc(
          doc(collection(basedatos, "modulos"), idModulo),
          {
            practicas: nuevasPracticas,
          }
        );
      } else {
        const resultado = await updateDoc(
          doc(collection(basedatos, "modulos"), idModulo),
          { practicas: arrayUnion(practica) }
        );

        toast.info(
          `Practica ${practica.titulo} guardada con el id ${practica.id}`
        );
        setIdPractica(null);
        // Se actualiza el estado "discente" con un nuevo "id" aleatorio.
        setPractica({
          id: Timestamp.now().toMillis() % 1000000,
          evaluacion: 0,
          numero: "",
          orden: 0,
          peso: 0,
          titulo: "",
        });
      }
    }
  };

  const borrarPractica = async () => {
    if (window.confirm(`¿Estás seguro de querer eliminar la práctica?`)) {
      const nuevasPracticas = practicas.filter((d) => d.id !== idPractica);
      setDiscentes(nuevasPracticas);
      const resultado = await updateDoc(
        doc(collection(basedatos, "modulos"), idModulo),
        { practicas: nuevasPracticas }
      );
      setPractica({
        id: Timestamp.now().toMillis() % 1000000,
        evaluacion: 0,
        numero: "",
        orden: 0,
        peso: 0,
        titulo: "",
      });
      setIdPractica(null);
    }
  };

  const cargarPractica = () => {
    console.log(`idPractica -> ${idPractica}`);
    const nuevo = practicas.find((elemento) => elemento.id === idPractica);
    if (nuevo) {
      setPractica(nuevo);
    } else {
      setPractica(practicaInicial);
    }
  };

  const datos = {
    modulos,
    setModulos,
    idModulo,
    setIdModulo,
    practicas,
    setPracticas,
    practica,
    setPractica,
    idPractica,
    setIdPractica,
    obtenerModulos,
    obtenerPracticas,
    enviarForm,
    borrarPractica,
  };

  return (
    <PracticasContexto.Provider value={datos}>
      {props.children}
    </PracticasContexto.Provider>
  );
};

export default PracticasContexto;
export { PrcaticasProveedor };
