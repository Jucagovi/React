import React from "react";
import { modulo } from "../modulo";

function Notas(props) {
  return (
    <React.Fragment>
      {props.id !== "" ? (
        <React.Fragment>
          <p>id = {props.id}</p>
          {/* <pre>{JSON.stringify(modulo.discentes[props.id], null, 2)}</pre> */}
          <div>
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
