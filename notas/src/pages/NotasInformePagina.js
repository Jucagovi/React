import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NotasInformeDetalle from "../components/Notas/NotasInformeDetalle";
import NotasModulos from "../components/Notas/NotasModulos";
import NotasPracticas from "../components/Notas/NotasPracticas";

const NotasInformePagina = () => {
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
            <NotasInformeDetalle />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotasInformePagina;
