import React from "react";
import "./Contenedor.css";

function Contenedor(props) {
  return <div className="contenedor">{props.children}</div>;
}

export default Contenedor;
