import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import DiscentesContexto from "../contextos/discentesContext";

const Discente = (props) => {
  const { idDiscente, setIdDiscente, discente, setDiscente, discentes } =
    useContext(DiscentesContexto);
  const { id, datos } = props;

  /* const cambiarEstado = () => {
    console.log(`idDiscente -> ${idDiscente}`);
    const nuevo = discentes.find((elemento) => elemento.id === idDiscente);
    if (nuevo) {
      setDiscente(nuevo);
    }
  }; */

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setIdDiscente(id);
          //cambiarEstado(id);
        }}
        key={datos.id}
      >
        {datos.nombre} {datos.apellidos} {datos.repetidor}
      </Button>
    </React.Fragment>
  );
};

export default Discente;
