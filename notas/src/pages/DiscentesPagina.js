import React, { useContext, useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DiscenteForm from "../components/Herramientas/Discentes/DiscenteForm";
import Discentes from "../components/Herramientas/Discentes/Discentes";
import DiscentesModulos from "../components/Herramientas/Discentes/DiscentesModulos";
import DiscentesContexto from "../contextos/discentesContext";

const DiscentesPagina = () => {
  const { discentes } = useContext(DiscentesContexto);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <DiscentesModulos />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Discentes />
          </Col>
          <Col sm={9}>
            {discentes ? (
              <DiscenteForm />
            ) : (
              <h3>No se ha seleccionado un modulo todavía.</h3>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DiscentesPagina;
