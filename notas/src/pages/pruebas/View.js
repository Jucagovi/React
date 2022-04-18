import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Discentes from "../components/Discentes.js";
import { Container, Row, Col } from "react-bootstrap";
import { modulo } from "../modulo.js";
import Notas from "../components/Notas.js";

const View = () => {
  const [discente, setDiscente] = useState("");
  const params = useParams();
  console.log(params);
  return (
    <React.Fragment>
      <h2>View</h2>
      <h3>{params.id}</h3>
      <h3>{discente}</h3>
      <Container>
        <Row>
          <Col sm={3}>
            {/* <pre>{JSON.stringify(modulo, null, 2)}</pre> */}
            {modulo.discentes.map((discente, indice) => {
              return (
                <div>
                  {discente.nombre} {discente.apellidos}{" "}
                  <input
                    type="button"
                    value="Ver notas"
                    onClick={() => setDiscente(indice)}
                  />
                </div>
              );
            })}
          </Col>
          <Col sm={9}>
            <Notas id={discente} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default View;
