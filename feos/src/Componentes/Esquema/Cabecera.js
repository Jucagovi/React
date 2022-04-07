import React from "react";
import "./Cabecera.css";

function Cabecera(props) {
  return <header>{props.children}</header>;
}

export default Cabecera;
