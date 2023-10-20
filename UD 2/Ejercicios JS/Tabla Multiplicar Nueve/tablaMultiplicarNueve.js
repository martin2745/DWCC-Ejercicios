const tablaMultiplicarNueve = () => {
  const numero = 9;
  let tabla = document.getElementById("tabla");
  let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`;

  tablaMultiplicar += "<ul>";
  for (let i = 0; i <= 10; i++) {
    tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`;
  }
  tablaMultiplicar += "</ul>";

  tabla.innerHTML = tablaMultiplicar;
};

/*
TABLAS DE MULTIPLICAR NUEVE - EXPLICACIÓN DEL CÓDIGO JS

Ver Explicación del ejercicio Tabla Multiplicar
*/
