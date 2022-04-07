import React from "react";

const Pelicula = (props) => {
  // Componente para pintar una película.
  return (
    <React.Fragment>
      <h1 key={props.id}>{props.nombre}</h1>
      <h2>
        dirigida por {props.director} en el año {props.ano}
      </h2>
      <h3>{props.children}</h3>
    </React.Fragment>
  );
};

export default Pelicula;
