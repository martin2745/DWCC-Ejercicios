// Pide al usuario su nombre y apellidos
let nombreCompleto = prompt("Introduce tu nombre y apellidos:");

// Calcula el tamaño del nombre y apellidos
let longitudTotal = nombreCompleto.length;

// Convierte a minúsculas y mayúsculas
let nombreMin = nombreCompleto.toLowerCase();
let nombreMay = nombreCompleto.toUpperCase();

// Separa nombre y apellidos
let partesNombre = nombreCompleto.split(" ");
let nombre = partesNombre[0];
let apellido1 = partesNombre[1];
let apellido2 = partesNombre[2];

// Calcula el tamaño sin espacios
let longitudSinEspacios =
  partesNombre[0].length + partesNombre[1].length + partesNombre[2].length;

// Propuesta de nombre de usuario
let usuarioPropuesto =
  nombre.toLowerCase() +
  apellido1.charAt(0).toUpperCase() +
  apellido2.charAt(0).toUpperCase();

// Muestra los resultados
console.log("Longitud total: " + longitudTotal);
console.log("Longitud sin espacios: " + longitudSinEspacios);
console.log("Nombre en minúsculas: " + nombreMin);
console.log("Nombre en mayúsculas: " + nombreMay);
console.log("Nombre: " + nombre);
console.log("Apellido1: " + apellido1);
console.log("Apellido2: " + apellido2);
console.log("Nombre de usuario propuesto: " + usuarioPropuesto);
