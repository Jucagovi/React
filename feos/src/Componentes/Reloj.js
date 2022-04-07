import React, { useState, useEffect } from "react";

function Reloj() {
  const [hora, setHora] = useState(new Date().toLocaleString("es-ES"));

  useEffect(() => {
    const intervalo = setInterval(() => {
      console.log(`Estoy mostrando la hora ${hora}`);
      setHora(new Date().toLocaleString("es-ES"));
    }, 100);

    return () => clearInterval(intervalo);
  }, [hora]);

  return <h2>{hora}</h2>;
}

export default Reloj;
