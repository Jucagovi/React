import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DiscentesContexto from "../contextos/discentesContext";
import { basedatos } from "../firebase";
import Discente from "./Discente";

const Discentes = () => {
  const { idModulo, discentes, setDiscentes } = useContext(DiscentesContexto);

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

  useEffect(() => {
    if (idModulo) {
      obtenerDiscentes(idModulo);
    }
  }, [idModulo]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {discentes !== null ? (
              discentes.map((discente) => {
                return (
                  <Discente
                    key={discente.id}
                    id={discente.id}
                    datos={discente}
                  />
                );
              })
            ) : (
              <p>No se ha seleccionado un módulo todavía.</p>
            )}
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Discentes;
