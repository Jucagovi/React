import React, { useState, useEffect } from "react";
import { bd } from "../../Bibliotecas/datosFirebase";
import {
  collection,
  getDocs,
  getDoc,
  query,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const Formulario = (props) => {
  // Se crea un objeto con la información del estado (la que hay que vigilar).
  const valoresIniciales = {
    nombre: "",
    apellidos: "",
    aficiones: [],
  };
  // Se crea un estado con la información que hay que vigilar y se asignan los valores iniciales.
  const [valores, setValores] = useState(valoresIniciales);

  //*********************************************************************** */
  // Función que se ejecutará cada vez que se cambie la información del formulario.
  //*********************************************************************** */
  // Cuando ocurra eso será necesario actualizar el estado.
  const cambioValores = (e) => {
    // Deconstruyendo objetos o array -> en las constantes id y value se guardan los valores de las propiedades homónimas del objeto.
    const { id, value } = e.target;
    // Operador ... -> realiza una copia de un objeto (crea un objeto nuevo). No trabaja con referencias.
    // Se añade al estado del componente los valores escritos en el formulario.
    //    -> copia los valores preexistentes en el objeto valores,
    //    -> y añade las modificaciones en el input que lanza el evento.
    setValores({ ...valores, [id]: value });
    //console.log(valores);
  };

  //*********************************************************************** */
  // Función para obtener un documento de la base de datos.
  //*********************************************************************** */
  const obtenerValores = async (id) => {
    const feo = await getDoc(doc(collection(bd, "feos"), id));
    //console.log(feo.data());
    setValores({ ...feo.data() });
  };

  //*********************************************************************** */
  // Función del evento onClick para trabajar con Firestore.
  //*********************************************************************** */
  const modificar = () => {
    // Se ejecuta la función del componente ascendente (pasada como propiedad)
    // con los valores del formulario de este componente.
    props.guardarValores(valores);
    setValores({ ...valoresIniciales });
    // Copia el objeto inicial vacío.
    // El efecto es el mismo que -> document.getElementById("formulario").reset();
    // pero trabajando con el estado del componente al estilo React.
  };

  useEffect(() => {
    if (props.id === "") {
      setValores({ ...valoresIniciales });
    } else {
      obtenerValores(props.id);
    }
  }, [props.id]);

  return (
    <React.Fragment>
      {/* Se añade como value la información del estado, así cuando ésta cambie se actualiza el formulario -> value={valores.nombre} */}
      {/* La información de estado se actualiza en cada cambio del input -> onChange={cambioValores} */}
      <div className="formulario">
        <form id="formulario">
          <input
            id="nombre"
            type="text"
            placeholder="Nombre del Feo"
            value={valores.nombre}
            onChange={cambioValores}
          />
          <br />
          <input
            id="apellidos"
            type="text"
            placeholder="Apellidos del Feo"
            value={valores.apellidos}
            onChange={cambioValores}
          />
          <br />
          <input
            id="aficiones"
            type="text"
            placeholder="Lista de aficiones"
            value={valores.aficiones}
            onChange={cambioValores}
          />
          <br />
          <input
            type="button"
            id="boton"
            onClick={modificar}
            value={props.id ? "Editar" : "Crear nuevo"}
          />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Formulario;
