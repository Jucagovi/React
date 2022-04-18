import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import forges from "../media/img/Forges.jpg";
const AcercaDe = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={forges} />
              <Card.Body>
                <Card.Title>Discentes v0.1</Card.Title>
                <Card.Text>
                  Versión preliminar de la aplicación para la gestión de notas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default AcercaDe;
