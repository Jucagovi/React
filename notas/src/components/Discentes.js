import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { modulo } from "../modulo.js";

const estadoInicial = {
  numero: "0",
  nota: 0,
};

const Discentes = () => {
  const [discente, setDiscente] = useState("");
  return (
    <React.Component>
      <Container>
        <Row>
          <Col sm={3}></Col>
          <Col sm={9}></Col>
        </Row>
      </Container>
    </React.Component>
  );
};

export default Discentes;
