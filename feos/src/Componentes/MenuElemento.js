import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./Firebase/Formulario";

const MenuElemento = (props) => {
  const c = props.children;
  const l = props.lugar;

  return (
    <React.Fragment>
      <input
        type="button"
        value={props.nombre}
        onClick={() => {
          ReactDOM.render(
            <Formulario modo="editar" />,
            document.getElementById("lado_derecho")
          );
        }}
      />
    </React.Fragment>
  );
};

export default MenuElemento;
