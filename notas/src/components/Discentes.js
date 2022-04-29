import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { basedatos } from "../firebase";
import Discente from "./Discente";

const discentesIniciales = null;

const Discentes = () => {
  const [discentes, setDiscentes] = useState(discentesIniciales);

  const obtenerDiscentes = async (id) => {
    const discentesModulo = await getDoc(
      doc(collection(basedatos, "modulos"), id)
    );
    setDiscentes(discentesModulo.data().discentes);

    /* await onSnapshot(collection(basedatos, "modulos"), (discentesListado) => {
      discentesListado.docs.map((doc) => {
        console.log(doc.data().discentes.length);
        console.log(idModulo);
      });
    }); */
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {/* <Button
              onClick={() => {
                obtenerDiscentes(idModulo);
              }}
            >
              xxx
            </Button> */}
            {discentes !== null ? (
              discentes.map((discente) => {
                return <Discente datos={discente} />;
              })
            ) : (
              <p>No se ha selccionado un módulo todavía.</p>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Discentes;
