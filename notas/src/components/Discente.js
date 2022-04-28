import React from "react";

const Discente = (props) => {
  return (
    <React.Fragment>
      <div key={props.datos.id}>
        {props.datos.nombre} {props.datos.apellidos} {props.datos.repetidor}
      </div>
    </React.Fragment>
  );
};

export default Discente;
