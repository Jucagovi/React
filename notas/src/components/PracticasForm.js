import React, { useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import PracticasContexto from "../contextos/practicasContexto";

const PracticasForm = () => {
  const {
    practica,
    setPractica,
    cargarPractica,
    idPractica,
    enviarForm,
    borrarPractica,
  } = useContext(PracticasContexto);

  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    if (name === "peso" || name === "orden") {
      setPractica({ ...practica, [name]: Number(value) });
    } else {
      setPractica({ ...practica, [name]: value });
    }
    console.log(practica.titulo.substr(0, 5));
  };

  useEffect(() => {
    if (practica) {
      cargarPractica();
    }
  }, [idPractica]);

  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Número de la práctica</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Número de la práctica..."
            name="numero"
            value={practica ? practica.numero : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Título de la práctica</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Título de la práctica..."
            name="titulo"
            value={practica ? practica.titulo : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="peso">
          <Form.Label>Peso</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Peso de la práctica..."
            name="peso"
            value={practica ? practica.peso : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="orden">
          <Form.Label>Orden de la práctica</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Orden de la práctica..."
            name="orden"
            value={practica ? practica.orden : ""}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="evaluacion">
          <Form.Label>Evaluación</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Evaluación de la práctica..."
            name="evaluacion"
            value={practica ? practica.evaluacion : ""}
          />
        </Form.Group>
        <Button
          onClick={() => {
            enviarForm();
          }}
          variant="primary"
          type="button"
        >
          {idPractica ? "Actualizar práctica" : "Guardar práctica"}
        </Button>
        {idPractica && (
          <Button
            onClick={() => {
              borrarPractica();
            }}
            variant="danger"
            type="button"
          >
            Borrar práctica
          </Button>
        )}
      </Form>
      <pre>{JSON.stringify(practica, null, 2)}</pre>
    </React.Fragment>
  );
};

export default PracticasForm;
