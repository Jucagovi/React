import { collection, onSnapshot } from "firebase/firestore";
import { Children, createContext, useState } from "react";
import { basedatos } from "../firebase";

const DiscentesContexto = createContext();

const valorInicial = "";
const valoresIniciales = null;

const DiscentesProveedor = (props) => {
  const [modulos, setModulos] = useState(valoresIniciales);
  const [idModulo, setIdModulo] = useState(valorInicial);

  const obtenerModulos = async () => {
    await onSnapshot(collection(basedatos, "modulos"), (modulosListado) => {
      setModulos(modulosListado.docs);
    });
  };
  const datos = { obtenerModulos, modulos, setModulos, idModulo, setIdModulo };
  return (
    <DiscentesContexto.Provider value={datos}>
      {props.children}
    </DiscentesContexto.Provider>
  );
};

export { DiscentesProveedor };
export default DiscentesContexto;
