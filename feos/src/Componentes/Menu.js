import React from "react";
import ReactDOM from "react-dom";
import Formulario from "./Firebase/Formulario";
//import Consultar from "./Firebase/Consultar";
import MenuElemento from "./MenuElemento";

const Menu = () => {
  const montar = (contenedor) => {
    ReactDOM.render(
      <Formulario modo="edicion" />,
      document.getElementById("lado_derecho")
    );
  };

  return (
    <React.Fragment>
      <MenuElemento lugar="lado_derecho" nombre="Editar">
        <Formulario modo="editar" />
      </MenuElemento>
      <input
        type="button"
        value="Visualizar"
        onClick={() => {
          ReactDOM.render(
            <Consultar />,
            document.getElementById("lado_derecho")
          );
        }}
      />
    </React.Fragment>
  );
};

export default Menu;
