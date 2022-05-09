import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotasForm from "../components/Notas/NotasForm";
import NotasModulos from "../components/Notas/NotasModulos";
import NotasPracticas from "../components/Notas/NotasPracticas";

const NotasPagina = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <NotasModulos />
        </Row>
        <Row>
          <Col sm={4}>
            <NotasPracticas />
          </Col>
          <Col sm={8}>
            <NotasForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotasPagina;
