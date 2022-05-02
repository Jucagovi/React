import React, { useContext, useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DiscenteForm from "../components/DiscenteForm";
import Discentes from "../components/Discentes";
import DiscentesModulos from "../components/DiscentesModulos";
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
          <Col sm={4}>
            <h2>LIstado de discnetes</h2>
            <Discentes />
          </Col>
          <Col sm={8}>
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
