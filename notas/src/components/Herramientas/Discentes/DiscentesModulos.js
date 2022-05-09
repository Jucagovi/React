import React, { useContext, useEffect } from "react";
import DiscentesContexto from "../../../contextos/discentesContext";
import Cargando from "../../Cargando";
import DiscentesModulo from "./DiscentesModulo";

const DiscentesModulos = () => {
  const { obtenerModulos, modulos } = useContext(DiscentesContexto);

  useEffect(() => {
    obtenerModulos();
  }, []);

  return (
    <React.Fragment>
      {modulos !== null ? (
        modulos.map((modulo) => {
          return (
            <DiscentesModulo
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

export default DiscentesModulos;
