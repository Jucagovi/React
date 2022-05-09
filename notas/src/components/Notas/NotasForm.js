import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import NotasContexto from "../../contextos/notasContexto";

const NotasForm = () => {
  const { practicas, discentes, numeroPractica, listadoNotas, listarNotas } =
    useContext(NotasContexto);

  const cambiarEstado = (e) => {
    const { name, value, id } = e.target;
    //setListadoNotas({ ...listadoNotas, [name]: value });
    //console.log(listadoNotas);
    console.log(`id -> ${id} valor -> ${value} name -> ${name}`);
  };

  // Crear un objeto para pintar las notas a partir de dos estados --> listadoNotas (no un estado).
  // Cuando se pulse un botón, actualizar el esatdo discentes con este listado (desde un formulario)
  // y guardar en firebase.

  useEffect(() => {
    if (numeroPractica) {
      listarNotas();
      console.log(listadoNotas);
    }
  }, [numeroPractica]);

  return (
    <React.Fragment>
      <Container>
        {/*         <Row>
          <Col>
            {numeroPractica ? <p>{numeroPractica}</p> : <p>No existe</p>}
          </Col>
        </Row> */}
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Apellidos</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody>
                {listadoNotas?.map((ln) => {
                  return (
                    <tr key={ln.id}>
                      <td>{ln.id}</td>
                      <td>{ln.nombre}</td>
                      <td>{ln.apellidos}</td>
                      <td>
                        <Form.Control
                          id={ln.id}
                          onChange={cambiarEstado}
                          type="number"
                          placeholder="S/N"
                          name="nota"
                          value={ln.nota}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <pre>{JSON.stringify(listadoNotas, null, 2)}</pre>
          </Col>
          <Col>
            <pre>{JSON.stringify(discentes, null, 2)}</pre>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default NotasForm;
