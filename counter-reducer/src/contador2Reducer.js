import types from "./types";
const estadoInicial2 = 1;

const contador2Reducer = (estadoPrevio, accion) => {
  switch (accion.type) {
    case types.multiplicar: {
      console.log(accion.payload);
      return estadoPrevio * 2;
    }
    case types.dividir: {
      if (estadoPrevio > 1) {
        return estadoPrevio / 2;
      } else {
        return estadoPrevio;
      }
    }
    case types.reiniciar: {
      return estadoInicial2;
    }
    default:
      return estadoPrevio;
  }
};

export { estadoInicial2, types };
export default contador2Reducer;
