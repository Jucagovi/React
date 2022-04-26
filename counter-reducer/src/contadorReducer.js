const estadoInicial = 0;

const types = {
  aumentar: "aumentar",
  disminuir: "disminuir",
  reiniciar: "reiniciar",
};

const contadorReducer = (estadoPrevio, accion) => {
  switch (accion.type) {
    case types.aumentar: {
      console.log(accion.payload);
      return estadoPrevio + 1;
    }
    case types.disminuir: {
      console.log(accion.payload);
      if (estadoPrevio > 0) {
        return estadoPrevio - 1;
      } else {
        return estadoPrevio;
      }
    }
    case types.reiniciar: {
      console.log(accion.payload);
      return estadoInicial;
    }
    default:
      return estadoPrevio;
  }
};

export { estadoInicial, types };
export default contadorReducer;
