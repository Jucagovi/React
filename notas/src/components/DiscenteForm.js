import React, { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import DiscentesContexto from "../contextos/discentesContext";

const DiscenteForm = (props) => {
  const { idDiscente, setIdDiscente, discente, setDiscente } =
    useContext(DiscentesContexto);
  const cambiarEstado = () => {
    //es para que no de error
  };
  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre del módulo</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Nombre del discente..."
            name="nombre"
            value={discente?.nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="abreviatura">
          <Form.Label>Abreviatura</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Apellidos del discente..."
            name="abreviatura"
            value={discente?.apellidos}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Repetidor..."
            name="curso"
            value={discente?.repetidor}
          />
        </Form.Group>
        <Button variant="primary" type="button">
          {props.id ? "Actualizar discente" : "Guardar discente"}
        </Button>
        {props.id && (
          <Button variant="danger" type="button">
            Borrar discente
          </Button>
        )}
      </Form>
    </React.Fragment>
  );
};

export default DiscenteForm;
