import React, { useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Discentes from "../components/Discentes";
import Modulos from "../components/Modulos";

const DiscentesPagina = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <h2>LIstado módulos</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={5}>
            <h2>LIstado de discnetes</h2>
            <Discentes />
          </Col>
          <Col sm={7}>
            <h2>Formulario discentes</h2>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DiscentesPagina;
