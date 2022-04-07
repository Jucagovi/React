import React from "react";

// const PrimerComponente = (props) => {
function PrimerComponente(props) {
  return (
    <React.Fragment>
      <h1>Hola {props.nombre} desde mi primer componente</h1>
      <h2>{props.children}</h2>
    </React.Fragment>
  );
}

export default PrimerComponente;
