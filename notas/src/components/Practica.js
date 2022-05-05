import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import PracticasContexto from "../contextos/practicasContexto";

const Practica = (props) => {
  const { setIdPractica } = useContext(PracticasContexto);
  const { id, datos } = props;

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setIdPractica(id);
        }}
        key={datos.id}
      >
        {datos.numero} {datos.titulo}
      </Button>
    </React.Fragment>
  );
};

export default Practica;
