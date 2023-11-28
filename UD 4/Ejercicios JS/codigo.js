// Array con un listado de países
let paises = ["España", "Francia", "Italia", "Alemania", "Portugal"];
alert("Los países son los siguientes: " + paises.join(", "));

// Función para mostrar el número de elementos del Array
function mostrarNumeroDeElementos(arr) {
  console.log("Número de elementos:", arr.length);
}

// Función para mostrar todos los países
function mostrarTodosLosPaises(arr) {
  console.log("Todos los países:", arr);
}

// Función para mostrar todos los países en sentido inverso
function mostrarEnSentidoInverso(arr) {
  console.log("Países en sentido inverso:", arr.slice().reverse());
}

// Función para añadir un país al principio del Array
function agregarAlPrincipio(arr, pais) {
  arr.unshift(pais);
  console.log("Array después de añadir un país al principio:", arr);
}

// Función para añadir un país al final del Array
function agregarAlFinal(arr, pais) {
  arr.push(pais);
  console.log("Array después de añadir un país al final:", arr);
}

// Función para eliminar un elemento al principio del Array e indicar cuál fue
function eliminarAlPrincipio(arr) {
  let primerPaisEliminado = arr.shift();
  console.log("País eliminado al principio:", primerPaisEliminado);
  console.log("Array después de eliminar un país al principio:", arr);
}

// Función para eliminar un elemento al final del Array e indicar cuál fue
function eliminarAlFinal(arr) {
  let ultimoPaisEliminado = arr.pop();
  console.log("País eliminado al final:", ultimoPaisEliminado);
  console.log("Array después de eliminar un país al final:", arr);
}

// Función para mostrar el elemento en la posición indicada por el usuario
function mostrarElementoEnPosicion(arr) {
  let posicionUsuario = parseInt(
    prompt("Ingrese la posición del elemento a mostrar:")
  );
  console.log(
    "Elemento en la posición",
    posicionUsuario,
    ":",
    arr[posicionUsuario]
  );
}

// Función para mostrar la posición de un elemento indicado por el usuario
function mostrarPosicionDeElemento(arr) {
  let paisUsuario = prompt("Ingrese el país para obtener su posición:");
  let posicionPais = arr.indexOf(paisUsuario);
  console.log("Posición de", paisUsuario, ":", posicionPais);
}

// Función para mostrar los elementos entre dos posiciones indicadas por el usuario
function mostrarElementosEntrePosiciones(arr) {
  let inicioUsuario = parseInt(prompt("Ingrese la posición de inicio:"));
  let finUsuario = parseInt(prompt("Ingrese la posición de fin:"));
  console.log(
    "Elementos entre las posiciones",
    inicioUsuario,
    "y",
    finUsuario,
    ":",
    arr.slice(inicioUsuario, finUsuario + 1)
  );
}

// Ejemplos de uso de las funciones
mostrarNumeroDeElementos(paises);
mostrarTodosLosPaises(paises);
mostrarEnSentidoInverso(paises);
agregarAlPrincipio(paises, "Argentina");
agregarAlFinal(paises, "Japón");
eliminarAlPrincipio(paises);
eliminarAlFinal(paises);
mostrarElementoEnPosicion(paises);
mostrarPosicionDeElemento(paises);
mostrarElementosEntrePosiciones(paises);
