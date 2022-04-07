import React from "react";
import Pelicula from "./Pelicula";

const Peliculas = (props) => {
  const peliculas = [
    {
      id: 1,
      name: "Juan",
      ano: 1978,
      director: "ninguno",
      opening_crawl: "lkhfjlksdjhfsldkjfhsdljfkhsf",
    },
    {
      id: 2,
      name: "Pepe",
      ano: 1980,
      director: "Feos",
      opening_crawl: "eqweqwewqeqwewqqweqweqe",
    },
    {
      id: 3,
      name: "Marisa",
      ano: 1979,
      director: "Alguno",
      opening_crawl: "asqswaaasaaasaaaaasas",
    },
  ];

  return (
    <React.Fragment>
      <h1>Películas de Star Wars</h1>
      <div>
        {peliculas.map((v) => {
          return (
            <Pelicula
              key={v.id}
              nombre={v.name}
              ano={v.ano}
              director={v.director}
            >
              {v.opening_crawl}
            </Pelicula>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Peliculas;
