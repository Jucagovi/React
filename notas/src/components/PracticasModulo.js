import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import PracticasContexto from "../contextos/practicasContexto";

const PracticasModulo = (props) => {
  const { idModulo, setIdModulo } = useContext(PracticasContexto);
  const { datos, id } = props;
  return (
    <React.Fragment>
      <div className="botonModulo" key={id} id={id}>
        <Button
          onClick={() => {
            setIdModulo(id);
          }}
        >
          {datos.curso} {datos.abreviatura}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default PracticasModulo;
