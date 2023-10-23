const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

// Valores para definir el color RGB.
// Cada valor debe estar en el rango: [0, 255].
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

textoRojo.textContent = inputRojo.value;
textoVerde.textContent = inputVerde.value;
textoAzul.textContent = inputAzul.value;

const actualizarColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
};

// Para actualizar Red (Rojo).
inputRojo.addEventListener("change", (e) => {
  /*e = objeto del evento / .target = elemento HTML donde se
    desencadena el evento / .value = valor del input*/
  rojo = e.target.value;
  textoRojo.textContent = rojo;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Green (Verde).
inputVerde.addEventListener("change", (e) => {
  verde = e.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde, azul);
});

// Para actualizar Blue (Azul).
inputAzul.addEventListener("change", (e) => {
  azul = e.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde, azul);
});
