import React from "react";
import "./Centro.css";

function Centro(props) {
  return (
    <section className="lado_centro" id="lado_centro">
      {props.children}
    </section>
  );
}

export default Centro;
