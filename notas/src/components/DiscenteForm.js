import { Timestamp } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import DiscentesContexto from "../contextos/discentesContext";

const DiscenteForm = (props) => {
  const {
    idDiscente,
    setIdDiscente,
    discente,
    setDiscente,
    discentes,
    enviarForm,
    discenteInicial,
  } = useContext(DiscentesContexto);

  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    setDiscente({ ...discente, [name]: value });
  };

  const cargarDiscente = () => {
    console.log(`idDiscente -> ${idDiscente}`);
    const nuevo = discentes.find((elemento) => elemento.id === idDiscente);
    if (nuevo) {
      setDiscente(nuevo);
    } else {
      setDiscente(discenteInicial);
    }
  };

  useEffect(() => {
    cargarDiscente();
  }, [idDiscente]);

  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre discente</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Nombre del discente..."
            name="nombre"
            value={discente ? discente.nombre : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="abreviatura">
          <Form.Label>Apellidos discente</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Apellidos del discente..."
            name="apellidos"
            value={discente ? discente.apellidos : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Repetidor</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Repetidor..."
            name="repetidor"
            value={discente ? discente.repetidor : ""}
          />
        </Form.Group>
        <Button
          onClick={() => {
            enviarForm();
          }}
          variant="primary"
          type="button"
        >
          {idDiscente ? "Actualizar discente" : "Guardar discente"}
        </Button>
        {idDiscente && (
          <Button variant="danger" type="button">
            Borrar discente
          </Button>
        )}
      </Form>
      <pre>{JSON.stringify(discente, null, 2)}</pre>
    </React.Fragment>
  );
};

export default DiscenteForm;
