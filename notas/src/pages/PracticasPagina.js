import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Practicas from "../components/Practicas";
import PracticasModulos from "../components/PracticasModulos";

const PracticasPagina = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <PracticasModulos />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Practicas />
          </Col>
          <Col sm={9}>
            <h3>formulario prácticas</h3>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PracticasPagina;
