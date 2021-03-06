import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Table, Button } from "react-bootstrap";
import ModulosContext from "../../../contextos/modulosContext";
import Cargando from "../../Cargando";
import Modulo from "./Modulo";

const Modulos = (props) => {
  const contexto = useContext(ModulosContext);

  useEffect(() => {
    contexto.obtenerModulos();
  }, []);

  return (
    <React.Fragment>
      <Table bordered hover size="sm">
        <tbody>
          {contexto.modulos ? (
            contexto.modulos.map((d) => {
              return <Modulo key={d.id} id={d.id} datos={d.data()} />;
            })
          ) : (
            <tr>
              <td>
                <Cargando />
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button
        onClick={() => {
          contexto.setIdModulo("");
        }}
      >
        Añadir módulo
      </Button>
    </React.Fragment>
  );
};

export default Modulos;
