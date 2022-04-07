import React from "react";
import "../CSS/Eventos.css";

function EventosII(props) {
  const anadir = (e) => {
    const objeto = e.target.nextElementSibling;
    objeto.innerHTML += "Contenido añadido.<br/>";
  };

  return (
    <React.Fragment>
      <button
        onClick={(e) => {
          anadir(e);
        }}
      >
        Añadir
      </button>
      <div className="texto">Aquí se añadirá contenido.</div>
    </React.Fragment>
  );
}

export default EventosII;
