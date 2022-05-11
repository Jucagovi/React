import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import NotasContexto from "../../contextos/notasContexto";
import NotasPractica from "./NotasPractica";

const NotasPracticas = () => {
  const {
    idModulo,
    obtenerPracticas,
    practicas,
    setIdPractica,
    discentes,
    obtenerDiscentes,
  } = useContext(NotasContexto);
  useEffect(() => {
    if (idModulo) {
      obtenerPracticas();
      obtenerDiscentes();
    }
  }, [idModulo]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {practicas !== null ? (
              practicas.map((p) => {
                return <NotasPractica key={p.id} id={p.id} datos={p} />;
              })
            ) : (
              <p>No se ha seleccionado un módulo todavía.</p>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotasPracticas;
