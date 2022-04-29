import { Children, createContext } from "react";

const DiscentesContexto = createContext();

const valorInicial = "";
const valoresIniciales = {};

const DiscentesProveedor = (props) => {
  const datos = {};

  return (
    <DiscentesContexto.Provider value={datos}>
      {props.children}
    </DiscentesContexto.Provider>
  );
};

export { DiscentesProveedor };
export default DiscentesContexto;
