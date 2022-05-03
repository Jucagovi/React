import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useContext, useReducer } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import DiscenteForm from "../components/DiscenteForm";
import Discentes from "../components/Discentes";
import DiscentesModulos from "../components/DiscentesModulos";
import DiscentesContexto from "../contextos/discentesContext";
import { basedatos } from "../firebase";

const DiscentesPagina = () => {
  const {
    idModulo,
    discente,
    setDiscente,
    discentes,
    idDiscente,
    setIdDiscente,
  } = useContext(DiscentesContexto);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <DiscentesModulos />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Discentes />
          </Col>
          <Col sm={9}>
            {discentes ? (
              <DiscenteForm />
            ) : (
              <h3>No se ha seleccionado un modulo todavía.</h3>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default DiscentesPagina;
