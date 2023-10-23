//seleccionamos los elementos del DOM.
const color = document.getElementById("color");
const boton = document.getElementById("boton-color");

//Generar color aleatorio
const generarColorHexAleatorio = () => {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    //Redondear hacia abajo un número decimal al entero más cercano.
    //Nos aseguramos que el entero esté entre [0,16).
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }

  return colorHex;
};

boton.addEventListener("click", () => {
  let colorAleatorio = generarColorHexAleatorio();
  color.innerText = colorAleatorio;
  document.body.style.backgroundColor = colorAleatorio;
});
