import React, { useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { basedatos } from "../firebase.js";
import {
  collection,
  addDoc,
  updateDoc,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import ModuloContext from "../contextos/modulosContext.js";
const ModuloForm = (props) => {
  const { modulo, setModulo, valoresIniciales } = useContext(ModuloContext);

  // Usando contextos

  const cambiarEstado = (e) => {
    const { name, value } = e.target;
    setModulo({ ...modulo, [name]: value });
  };

  const obtenerModulo = async (id) => {
    const moduloObtenido = await getDoc(
      doc(collection(basedatos, "modulos"), id)
    );
    if (moduloObtenido.exists()) {
      //Construyo un nuevo objeto que se adapte al formulario.
      const m = {
        nombre: moduloObtenido.data().nombre,
        abreviatura: moduloObtenido.data().abreviatura,
        curso: moduloObtenido.data().curso,
      };
      setModulo(m);
    } else {
      toast.error("Se ha producido un error con la conexión.");
    }
  };

  useEffect(() => {
    if (props.id) {
      obtenerModulo(props.id);
    } else {
      setModulo({ ...valoresIniciales });
    }
  }, [props.id]);

  return (
    <React.Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre del módulo</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Nombre del módulo..."
            name="nombre"
            value={modulo.nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="abreviatura">
          <Form.Label>Abreviatura</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Abreviatura del módulo..."
            name="abreviatura"
            value={modulo.abreviatura}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="curso">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            onChange={cambiarEstado}
            type="text"
            placeholder="Curso..."
            name="curso"
            value={modulo.curso}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            props.funcionClick(modulo);
            setModulo({ ...valoresIniciales });
          }}
        >
          {props.id ? "Actualizar módulo" : "Guardar módulo"}
        </Button>
        {props.id && (
          <Button
            variant="danger"
            type="button"
            onClick={() => {
              // La función eliminarModulo() devuelve true o false para poder inicializar los valores del estado
              // y reiniciar el formulario. Esto ocurre si el usuario pulsa cancelar en el mensaje del prompt.
              if (!props.funcionBorrar(props.id)) {
                setModulo({ ...valoresIniciales });
              }
            }}
          >
            Borrar módulo
          </Button>
        )}
      </Form>
    </React.Fragment>
  );
};

export default ModuloForm;
