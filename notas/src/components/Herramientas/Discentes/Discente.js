import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import DiscentesContexto from "../../../contextos/discentesContext";

const Discente = (props) => {
  const { setIdDiscente } = useContext(DiscentesContexto);
  const { id, datos } = props;

  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setIdDiscente(id);
        }}
        key={datos.id}
      >
        {datos.nombre} {datos.apellidos} {datos.repetidor}
      </Button>
    </React.Fragment>
  );
};

export default Discente;
