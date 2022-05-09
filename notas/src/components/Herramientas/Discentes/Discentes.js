import { collection, doc, onSnapshot, Timestamp } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import DiscentesContexto from "../../../contextos/discentesContext";
import { basedatos } from "../../../firebase";
import Discente from "./Discente";

const Discentes = () => {
  const { idModulo, discentes, setDiscentes, setIdDiscente, setDiscente } =
    useContext(DiscentesContexto);

  const obtenerDiscentes = async (id) => {
    await onSnapshot(doc(collection(basedatos, "modulos"), id), (doc) => {
      setDiscentes(doc.data().discentes);
    });
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
            <p>
              {idModulo && (
                <Button
                  onClick={() => {
                    setIdDiscente(null);
                    //De esta forma se genera un nuevo "id" para el estado "discente".
                    setDiscente({
                      id: Timestamp.now().toMillis() % 1000000,
                      nombre: "",
                      apellidos: "",
                      repetidor: "",
                      notas: [],
                    });
                  }}
                >
                  Añadir discente
                </Button>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Discentes;
