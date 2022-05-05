import React from "react";
import { Button, Form } from "react-bootstrap";
import PracticasContexto from "../contextos/practicasContexto";

export const PracticasForm = () => {
  const { practica } = useContext(PracticasContexto);

  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    setPractica({ ...practica, [name]: value });
  };

  useEffect(() => {
    cargarPractica();
  }, [idPractica]);

  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Título de la práctica</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Título de la práctica..."
            name="titulo"
            value={practica ? practica.titulo : ""}
          />
        </Form.Group>
        {/* CONTINUAR DESDE AQUÍ */}
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
          <Button
            onClick={() => {
              borrarDiscente();
            }}
            variant="danger"
            type="button"
          >
            Borrar discente
          </Button>
        )}
      </Form>
      <pre>{JSON.stringify(practica, null, 2)}</pre>
    </React.Fragment>
  );
};
