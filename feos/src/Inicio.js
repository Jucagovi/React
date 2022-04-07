import React from "react";
import "./Inicio.css";
import Contenedor from "./Componentes/Esquema/Contenedor";
import Derecha from "./Componentes/Esquema/Derecha";
import Izquierda from "./Componentes/Esquema/Izquierda";
import Cabecera from "./Componentes/Esquema/Cabecera";
import Pie from "./Componentes/Esquema/Pie";
import Eventos from "./Componentes/Eventos";
import EventosII from "./Componentes/EventosII";
import Consultar from "./Componentes/Firebase/Consultar";
import Formulario from "./Componentes/Firebase/Formulario";
import Insertar from "./Componentes/Firebase/Insertar";
import Actualizar from "./Componentes/Firebase/Actualizar";
import Menu from "./Componentes/Menu";
import Centro from "./Componentes/Esquema/Centro";
import Feos from "./Componentes/Firebase/Feos";

function Inicio() {
  return (
    <React.Fragment>
      <div className="inicio">
        <Cabecera>Esto es la cabecera</Cabecera>
        <Contenedor>
          <Izquierda></Izquierda>
          <Derecha>
            <Feos />
          </Derecha>
        </Contenedor>
        <Pie>Esto es el pie de página</Pie>
      </div>
    </React.Fragment>
  );
}

export default Inicio;
