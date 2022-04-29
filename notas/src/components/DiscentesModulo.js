import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import DiscentesContexto from "../contextos/discentesContext";

const DiscentesModulo = (props) => {
  const { idModulo, setIdModulo } = useContext(DiscentesContexto);
  const { datos, id } = props;
  return (
    <React.Fragment>
      <div className="botonModulo" key={id}>
        <Button
          id={id}
          onClick={(e) => {
            console.log(e.target.id);
            setIdModulo(e.target.id);
          }}
        >
          {datos.curso} {datos.abreviatura}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default DiscentesModulo;
