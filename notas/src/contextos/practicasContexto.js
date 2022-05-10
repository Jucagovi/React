import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { aleatorio, construirPractica } from "../bibliotecas/funciones";
import { basedatos } from "../firebase";

/*
* COSAS A REVISAR
  Cuando se crea un discente, comprobar si hay prácticas en el módulo y añadir la nota a 0
*
*/

const valoresIniciales = null;
const valorInicial = null;
const practicaInicial = {
  id: aleatorio(6),
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
  const [discentes, setDiscentes] = useState(null);

  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
    });
  };

  const obtenerPracticas = async (id) => {
    await onSnapshot(doc(collection(basedatos, "modulos"), id), (doc) => {
      setPracticas(doc.data().practicas);
    });
  };

  const obtenerDiscentes = async (id) => {
    const tempDiscentes = await getDoc(
      doc(collection(basedatos, "modulos"), id)
    );
    setDiscentes(tempDiscentes.data().discentes);
  };

  // Función para introducir una nota a 0 por cada práctica creada.
  const rellenarPracticas = async (id) => {
    // Obtengo el listado de discentes de este módulo.
    const tempDiscentes = await getDoc(
      doc(collection(basedatos, "modulos"), idModulo)
    );
    // Se crea un nuevo array con los discentes añadiéndole la práctica recien creada.
    const nuevosDiscentes = tempDiscentes.data().discentes.map((d) => {
      const nuevoD = {
        id: id,
        nota: 0,
      };
      // Añado a lo que ya existe en notas (...d.notas) la nueva nota a o (nuevoD).
      d.notas = [...d.notas, nuevoD];
      return d;
    });
    // Se actualiza el modulo con los nuevos discentes en Firebase.
    await updateDoc(doc(collection(basedatos, "modulos"), idModulo), {
      discentes: nuevosDiscentes,
    });
  };

  const enviarForm = async () => {
    if (!practica.titulo || !practica.numero) {
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
        await updateDoc(doc(collection(basedatos, "modulos"), idModulo), {
          practicas: arrayUnion(practica),
        });
        rellenarPracticas(practica.id);
        toast.info(
          `Practica ${practica.titulo} guardada con el id ${practica.id}`
        );
        setIdPractica(null);
        // Se actualiza el estado "discente" con un nuevo "id" aleatorio.
        setPractica(construirPractica());
      }
    }
  };

  const borrarPractica = async () => {
    if (window.confirm(`¿Estás seguro de querer eliminar la práctica?`)) {
      const nuevasPracticas = practicas.filter((d) => d.id !== idPractica);
      setPracticas(nuevasPracticas);
      const resultado = await updateDoc(
        doc(collection(basedatos, "modulos"), idModulo),
        { practicas: nuevasPracticas }
      );
      setPractica(construirPractica());
      setIdPractica(null);
    }
  };

  const cargarPractica = () => {
    if (practicas) {
      // Evito que "practicas" sea nulo al inicio.
      const nuevo = practicas.find((elemento) => elemento.id === idPractica);
      if (nuevo) {
        setPractica(nuevo);
      } else {
        setPractica(practicaInicial);
      }
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
    cargarPractica,
  };

  return (
    <PracticasContexto.Provider value={datos}>
      {props.children}
    </PracticasContexto.Provider>
  );
};

export default PracticasContexto;
export { PrcaticasProveedor };
