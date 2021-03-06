import { Timestamp } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PracticasContexto from "../../../contextos/practicasContexto";
import Practica from "./Practica";
import { construirPractica } from "../../../bibliotecas/funciones";

const Practicas = () => {
  const { practicas, idModulo, setIdPractica, setPractica, obtenerPracticas } =
    useContext(PracticasContexto);

  useEffect(() => {
    if (idModulo) {
      obtenerPracticas(idModulo);
    }
  }, [idModulo]);

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {practicas !== null ? (
              practicas.map((p) => {
                return <Practica key={p.id} id={p.id} datos={p} />;
              })
            ) : (
              <p>No se ha seleccionado un módulo todavía.</p>
            )}
            <p>
              {idModulo && (
                <Button
                  onClick={() => {
                    setIdPractica(null);
                    //De esta forma se genera un nuevo "id" para el estado "practica".
                    setPractica(construirPractica());
                  }}
                >
                  Añadir práctica
                </Button>
              )}
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Practicas;
