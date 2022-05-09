import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NotasContexto from "../../contextos/notasContexto";

const NotasForm = () => {
  const { practicas, discentes, numeroPractica } = useContext(NotasContexto);
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {numeroPractica ? <p>{numeroPractica}</p> : <p>No existe</p>}
          </Col>
        </Row>
        <Row>
          <Col>
            <pre>{JSON.stringify(practicas, null, 2)}</pre>
          </Col>
          <Col>
            <pre>{JSON.stringify(discentes, null, 2)}</pre>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotasForm;
