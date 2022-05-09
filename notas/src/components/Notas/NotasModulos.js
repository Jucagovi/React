import React, { useContext, useEffect } from "react";
import NotasModulo from "./NotasModulo";
import NotasContexto from "../../contextos/notasContexto";
import Cargando from "../Cargando";

const NotasModulos = () => {
  const { modulos, obtenerModulos } = useContext(NotasContexto);

  useEffect(() => {
    obtenerModulos();
  }, []);

  return (
    <React.Fragment>
      {modulos !== null ? (
        modulos.map((modulo) => {
          return (
            <NotasModulo key={modulo.id} id={modulo.id} datos={modulo.data()} />
          );
        })
      ) : (
        <Cargando />
      )}
    </React.Fragment>
  );
};

export default NotasModulos;
