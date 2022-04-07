import React from "react";
import "./Derecha.css";

function Derecha(props) {
  return (
    <section className="lado_derecho" id="lado_derecho">
      {props.children}
    </section>
  );
}

export default Derecha;
