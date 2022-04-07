import React, { useState, useEffect } from "react";
import Pelicula from "./Pelicula";
import Cargando from "./Cargando";

const ConsumirAPI = (props) => {
  const url = "http://swapi.py4e.com/api/films";
  //const url = "https://swapi.dev/api/films";

  const [peliculas, setPeliculas] = useState([]);

  const getInfo = async () => {
    const respuesta = await fetch(url);
    //console.log(respuesta);
    const respuestaJSON = await respuesta.json();
    console.log(respuestaJSON);
    setPeliculas(respuestaJSON.results);
    console.log(peliculas);
  };

  //getInfo(); Nunca hacerlo de esta forma.

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <React.Fragment>
      <h1>Películas de Star Wars</h1>
      <div>
        {!peliculas ? (
          <Cargando texto="Cargando datos..." />
        ) : (
          peliculas.map((v) => {
            return (
              <Pelicula
                id={v.episode_id}
                nombre={v.title}
                ano={v.release_date}
                director={v.director}
              >
                {v.opening_crawl}
              </Pelicula>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default ConsumirAPI;
