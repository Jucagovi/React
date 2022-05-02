import { collection, onSnapshot } from "firebase/firestore";
import { Children, createContext, useState } from "react";
import { basedatos } from "../firebase";

const DiscentesContexto = createContext();

const valorInicial = null;
const valoresIniciales = null;
const discentesIniciales = null;
const discenteInicial = null;

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
  };
  return (
    <DiscentesContexto.Provider value={datos}>
      {props.children}
    </DiscentesContexto.Provider>
  );
};

export { DiscentesProveedor };
export default DiscentesContexto;
