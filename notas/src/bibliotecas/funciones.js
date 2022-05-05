import { Timestamp } from "firebase/firestore";

const acortar = (cadena, longitud) => {
  return cadena.substr(0, longitud);
};

const aleatorio = (longitud) => {
  return Timestamp.now().toMillis() % Math.pow(10, longitud);
};

const construirPractica = () => {
  return {
    id: aleatorio(6),
    evaluacion: 0,
    numero: "",
    orden: 0,
    peso: 0,
    titulo: "",
  };
};

export { acortar, aleatorio, construirPractica };
