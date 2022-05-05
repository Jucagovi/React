import React, { useContext, useEffect } from "react";
import PracticasContexto from "../contextos/practicasContexto";
import Cargando from "./Cargando";
import PracticasModulo from "./PracticasModulo";

const PracticasModulos = () => {
  const { setModulos, modulos, obtenerModulos } = useContext(PracticasContexto);

  useEffect(() => {
    obtenerModulos();
  }, []);

  return (
    <React.Fragment>
      {modulos !== null ? (
        modulos.map((modulo) => {
          return (
            <PracticasModulo
              key={modulo.id}
              id={modulo.id}
              datos={modulo.data()}
            />
          );
        })
      ) : (
        <Cargando />
      )}
    </React.Fragment>
  );
};

export default PracticasModulos;
