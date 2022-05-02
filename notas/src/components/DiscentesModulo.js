import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import DiscentesContexto from "../contextos/discentesContext";

const DiscentesModulo = (props) => {
  const { idModulo, setIdModulo } = useContext(DiscentesContexto);
  const { datos, id } = props;
  return (
    <React.Fragment>
      <div className="botonModulo" key={id} id={id}>
        <Button
          onClick={(e) => {
            setIdModulo(id);
          }}
        >
          {datos.curso} {datos.abreviatura}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default DiscentesModulo;
