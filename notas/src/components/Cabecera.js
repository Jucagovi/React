import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Menu from "./Menu.js";

const Cabecera = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <div id="logo">Logo aquí</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Menu />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Cabecera;
