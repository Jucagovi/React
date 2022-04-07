import React from "react";
import "../CSS/Eventos.css";

function Eventos(props) {
  const ocultar = (e) => {
    const objeto = e.target.nextElementSibling;
    objeto.classList.toggle("oculto");
  };

  return (
    <React.Fragment>
      {/* onClick espera una función. Si es necesario usar parámetros hay que pasarle uns función flecha.*/}
      <button onClick={ocultar}>Ocultar</button>
      <div className="texto">Este texto será ocultado al pulsar el botón.</div>
    </React.Fragment>
  );
}

export default Eventos;
