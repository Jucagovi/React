import { Children, createContext } from "react";

const DiscentesContexto = createContext();

valorInicial = "";
valoresIniciales = {};

const DiscentesProveedor = () => {
  const datos = {};

  return (
    <DiscentesContexto.Provider value={datos}>
      {props.children}
    </DiscentesContexto.Provider>
  );
};

export { DiscentesContexto };
export default DiscentesContexto;
