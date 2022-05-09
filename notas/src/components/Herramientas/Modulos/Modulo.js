import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import ModulosContext from "../../../contextos/modulosContext";
import "./Modulo.css";

const Modulo = (props) => {
  const contexto = useContext(ModulosContext);
  return (
    <React.Fragment>
      <tr className="modulotr">
        <td
          onClick={() => {
            contexto.setIdModulo(props.id);
          }}
        >
          {props.datos.curso} {props.datos.abreviatura}
        </td>
      </tr>
    </React.Fragment>
  );
};

export default Modulo;
