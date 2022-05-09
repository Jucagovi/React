import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Practicas from "../components/Herramientas/Practicas/Practicas";
import PracticasForm from "../components/Herramientas/Practicas/PracticasForm";
import PracticasModulos from "../components/Herramientas/Practicas/PracticasModulos";

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
            <PracticasForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default PracticasPagina;
