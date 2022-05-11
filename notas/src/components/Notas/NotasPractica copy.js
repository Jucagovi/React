import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { acortar } from "../../bibliotecas/funciones";
import NotasContexto from "../../contextos/notasContexto";

const NotasPractica = (props) => {
  const { setIdPractica, setNumeroPractica } = useContext(NotasContexto);
  const { datos, id } = props;
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          setIdPractica(id);
          setNumeroPractica(datos.numero);
        }}
        key={datos.id}
      >
        {datos.numero} {acortar(datos.titulo, 30)}
      </Button>
    </React.Fragment>
  );
};

export default NotasPractica;
