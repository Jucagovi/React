import React from "react";
import { modulo } from "../../modulo";
import Cargando from "../Cargando";

/* Uso del operador ? en objetos.
modulos?.discentes -> si modulos no es un obejto no intentará acceder a discentes.
modulos?.discentes?.notas -> sólo si modulos y discentes son objetos accederá a notas. */

function Notas(props) {
  return (
    <React.Fragment>
      {props.id !== "" ? (
        <React.Fragment>
          <p>id = {props.id}</p>
          {/* <pre>{JSON.stringify(modulo.discentes[props.id], null, 2)}</pre> */}
          <div>
            <Cargando />
            {modulo.discentes[props.id].notas.map((nota) => {
              return (
                <div>
                  Práctica {nota.numero} = {nota.nota}
                </div>
              );
            })}
          </div>
        </React.Fragment>
      ) : (
        <p>Seleccione un discente.</p>
      )}
    </React.Fragment>
  );
}

export default Notas;
