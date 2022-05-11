import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import NotasContexto from "../../contextos/notasContexto";
import NotasPractica from "./NotasPractica";

const NotasModulo = (props) => {
  const { datos, id } = props;
  const { setIdModulo, setNumeroPractica } = useContext(NotasContexto);

  return (
    <React.Fragment>
      <div className="botonModulo" key={id} id={id}>
        <Button
          onClick={() => {
            setIdModulo(id);
            setNumeroPractica(null);
          }}
        >
          {datos.curso} {datos.abreviatura}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default NotasModulo;
