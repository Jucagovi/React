import React from "react";
import "./Izquierda.css";

function Izquierda(props) {
  return <section className="lado_izquierdo">{props.children}</section>;
}

export default Izquierda;
