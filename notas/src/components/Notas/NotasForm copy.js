import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import NotasContexto from "../../contextos/notasContexto";

const NotasForm = () => {
  const { practicas, discentes, setDiscentes, numeroPractica } =
    useContext(NotasContexto);
  const [listadoNotas, setListadoNotas] = useState(null);

  // Se crea un estado para manejar el formulario.
  // Al cambiar las notas se actualiza ese estado recorriéndolo y modificando el objeto cambiado.
  // Por último, se añade el nuevo array de objetos al estado del componente.
  const cambiarEstado = (e) => {
    const { value, id } = e.target;
    const listadoTemp = listadoNotas.map((ln) => {
      if (ln.id === id) {
        return {
          id: ln.id,
          nombre: ln.nombre,
          apellidos: ln.apellidos,
          numero: ln.numero,
          nota: Number(value),
        };
      } else {
        return ln;
      }
    });
    setListadoNotas(listadoTemp);
  };

  // Crea un objeto a partir de los dos estados (discentes y notas) para crear un tercer estado (listadoNotas) que controle el formulario de notas.
  const listarNotas = () => {
    const listado = discentes.map((discente) => {
      let nota;
      discente.notas.map((n) => {
        if (n.numero === numeroPractica) {
          nota = Number(n.nota);
        }
      });
      return {
        id: discente.id,
        nombre: discente.nombre,
        apellidos: discente.apellidos,
        numero: numeroPractica,
        nota: Number(nota),
      };
    });
    setListadoNotas(listado);
  };

  const guardarNotas = () => {
    const nuevosDiscentes = listadoNotas.map((ln) => {
      // Filtro discentes para que sólo devuelva un valor y no existan undefined devueltos por el map.
      const filtradoDiscente = discentes.filter((d) => d.id === ln.id);
      // En temp guardo el array con un solo discente ya modificada su nota.
      const temp = filtradoDiscente.map((d) => {
        //Cambio las notas si coinciden.
        if (d.id === ln.id) {
          const nuevasNotas = d.notas.map((n) => {
            if (ln.numero === n.numero) {
              return {
                numero: ln.numero,
                nota: ln.nota,
              };
            } else {
              return n;
            }
          });
          // Cambio nuevas notas en d y devuelvo un discente.
          return { ...d, ["notas"]: nuevasNotas };
        }
      });
      // Devuelvo el primero (único) objeto del array.
      // Si lo devuelvo directamente se altera la estructura del objeto en Firestore.
      return temp[0];
    });
    setDiscentes(nuevosDiscentes);
  };

  useEffect(() => {
    if (numeroPractica) {
      listarNotas();
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
            <Button onClick={guardarNotas}>Guardar notas</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <pre>{JSON.stringify(listadoNotas, null, 2)}</pre> */}
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
