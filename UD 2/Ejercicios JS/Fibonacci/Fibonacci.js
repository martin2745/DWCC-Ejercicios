const fibonacci = () => {
  const fibonacci = [0, 1];
  let tabla = document.getElementById("tabla");
  let tablaFibonacci = `<h2>Serie de Fibonacci para los 10 primeros números</h2>`;

  tablaFibonacci += "<ul>";
  tablaFibonacci += `<li>0</li>`;
  tablaFibonacci += `<li>1</li>`;
  for (let i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    tablaFibonacci += `<li>${fibonacci[i]}</li>`;
  }
  tablaFibonacci += "</ul>";

  tabla.innerHTML = tablaFibonacci;
};

/*
FIBONACCI - EXPLICACIÓN DEL CÓDIGO JS

*/
