import React, { useContext } from "react";
import NotasContexto from "../../contextos/notasContexto";

const Notas = () => {
  const { notas } = useContext(NotasContexto);
  return (
    <React.Fragment>
      <h2>Notas listado</h2>
    </React.Fragment>
  );
};

export default Notas;
