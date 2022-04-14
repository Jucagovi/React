// En la base de datos tengo un JSON con la estructura de "modulo".
// La idea es crear una práctica (objeto) y meterla en el Array "practicas" del objeto "modulo".
// De igual modo, se crea una objeto "discente" para introducirlo en su Array homónimo.
// El objeto "nota" se guardará en en Array "notas" del objeto "discentes".
export let modulo = {
  id: "21-22DAW",
  curso: "2021/22",
  abreviatura: "DAW",
  nombre: "Desarrollo web en entorno cliente",
  practicas: [
    {
      id: 1,
      orden: 1,
      titulo: "Práctica de prueba",
      numero: "1.1",
      peso: 10,
      evaluacion: 1,
    },
    {
      id: 2,
      orden: 2,
      titulo: "Práctica de prueba 2",
      numero: "1.2",
      peso: 10,
      evaluacion: 1,
    },
    {
      id: 3,
      orden: 3,
      titulo: "Práctica de prueba 3",
      numero: "1.3",
      peso: 40,
      evaluacion: 1,
    },
  ],
  discentes: [
    {
      id: "1",
      nombre: "Juan",
      apellidos: "Martínez Feo",
      repetidor: 0,
      notas: [
        {
          numero: "1.1",
          nota: 80,
        },
        {
          numero: "1.2",
          nota: 90,
        },
        {
          numero: "1.3",
          nota: 70,
        },
      ],
    },
    {
      id: "2",
      nombre: "María",
      apellidos: "López Fea",
      repetidor: 1,
      notas: [
        {
          numero: "1.1",
          nota: 90,
        },
        {
          numero: "1.2",
          nota: 100,
        },
        {
          numero: "1.3",
          nota: 80,
        },
      ],
    },
    {
      id: "3",
      nombre: "Pedro",
      apellidos: "García Feo",
      repetidor: 0,
      notas: [
        {
          numero: "1.1",
          nota: 60,
        },
        {
          numero: "1.2",
          nota: 50,
        },
        {
          numero: "1.3",
          nota: 60,
        },
      ],
    },
  ],
};
