let colaDiscoteca = [
  ["Martín", "H", 23],
  ["Laura", "M", 15],
  ["Carlos", "H", 30],
  ["Ana", "M", 22],
  ["Juan", "H", 28],
  ["Sofía", "M", 25],
  ["David", "H", 31],
  ["Elena", "M", 17],
  ["Pedro", "H", 16],
  ["Isabel", "M", 24],
];
let mayoresEdad = [];
let ganador = [];

const portero = (cola) => {
  let toret = [];
  for (persona of cola) {
    if (persona[2] >= 18) {
      toret.push(persona);
    }
  }
  return toret;
};

const ordenAlfabetico = (listaPersonas) => {
  let toret = [];
  let listTemporal = [];
  for (persona of listaPersonas) {
    listTemporal.push(persona[0]);
  }
  listTemporal.sort();

  for (personaOrdenada of listTemporal) {
    for (persona of listaPersonas) {
      if (persona[0] == personaOrdenada) {
        toret.push(persona);
      }
    }
  }

  return toret;
};

const sorteo = (listaPersonas) => {
  let posGanador = Math.floor(Math.random() * listaPersonas.length);
  return listaPersonas[posGanador];
};

mayoresEdad = portero(colaDiscoteca);
console.log(mayoresEdad);

mayoresEdad = ordenAlfabetico(mayoresEdad);
console.log(mayoresEdad);

ganador = sorteo(mayoresEdad);
console.log(ganador[0].toUpperCase());
