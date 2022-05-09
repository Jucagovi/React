import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";

import {
  doc,
  addDoc,
  deleteDoc,
  collection,
  updateDoc,
  arrayUnion,
  Timestamp,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import ModulosContext from "../contextos/modulosContext";
import { basedatos } from "../firebase";
import Modulos from "../components/Herramientas/Modulos/Modulos";
import ModuloForm from "../components/Herramientas/Modulos/ModuloForm";

const ModulosPagina = () => {
  /*
   *   Contexto
   */

  const { idModulo, setIdModulo, valorInicial } = useContext(ModulosContext);

  // Esta función tiene que estar fuera del componente <ModuloForm> ya que tiene que manejar el estado idModulo.
  // Este estado es el encargado de actualizar el formulario en función de los el estado idModulo.
  const enviarForm = async (datos) => {
    if (!datos.nombre || !datos.abreviatura || !datos.curso) {
      toast.error("Faltan valores obligatorios.");
    } else {
      if (idModulo) {
        await updateDoc(doc(collection(basedatos, "modulos"), idModulo), datos);
        toast.info("Documento actualizado correctamente.");
        setIdModulo(valorInicial);
      } else {
        const resultado = await addDoc(collection(basedatos, "modulos"), datos);
        if (resultado.id) {
          toast.info(
            `Módulo ${datos.nombre} guardado con el id ${resultado.id}`
          );
          setIdModulo(valorInicial);
        } else {
          toast.error("Se ha producido un error.");
        }
      }
    }
  };

  // Ocurre lo mismo que con la función enviarForm.
  const eliminarModulo = async (id) => {
    if (
      window.confirm(
        `¿Estás seguro de querer eliminar el módulo con id ${id} ?`
      )
    ) {
      await deleteDoc(doc(basedatos, "modulos", id));
      toast.info("Módulo eliminado de forma correcta.");
      setIdModulo(valorInicial);
      // El usuario ha contestado "Aceptar"" al borrado y hay que reiniciar el formulario.
      return true;
    } else {
      // El usuario ha contestado "Cancelar" al borrado y NO hay que reiniciar el formulario.
      return false;
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm={3}>
            <Modulos />
          </Col>
          <Col sm={9}>
            <ModuloForm
              id={idModulo}
              funcionClick={enviarForm}
              funcionBorrar={eliminarModulo}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ModulosPagina;
