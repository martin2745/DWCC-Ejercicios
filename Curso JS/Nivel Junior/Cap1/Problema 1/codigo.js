let pedirDato = true;
let entradaChicoUno = 0.0;
let entradaChicoDos = 0.0;
let entradaChicoTres = 0.0;

const pedirDatos = () => {
  entradaChicoUno = prompt("¿Cuánto dinero tiene el primer chico?");
  validate(entradaChicoUno, "el primer chico");
  entradaChicoDos = prompt("¿Cuánto dinero tiene el segundo chico?");
  validate(entradaChicoDos, "el segundo chico");
  entradaChicoTres = prompt("¿Cuánto dinero tiene el tercer chico?");
  validate(entradaChicoTres, "el tercer chico");
};

const validate = (entrada, chico) => {
  let repetir = true;
  while (repetir) {
    if (isNaN(parseFloat(entrada))) {
      entrada = prompt(`¿Cuánto dinero tiene ${chico}?`);
    } else {
      repetir = false;
    }
  }
};

const helado = (dinero, chico) => {
  if (dinero < 0.5) {
    alert(`El ${chico} no puede comprar nada`);
  } else if (dinero >= 0.5 && dinero < 1.0) {
    alert(
      `El ${chico} puede comprar un helado de nata, su vuelta es de ${(
        dinero - 0.5
      ).toFixed(2)}`
    );
  } else if (dinero >= 1.0 && dinero < 1.5) {
    alert(
      `El ${chico} puede comprar un helado de crema, su vuelta es de ${(
        dinero - 1.0
      ).toFixed(2)}`
    );
  } else if (dinero >= 1.5 && dinero < 2.0) {
    alert(
      `El ${chico} puede comprar un helado de chocolate, su vuelta es de ${(
        dinero - 1.5
      ).toFixed(2)}`
    );
  } else if (dinero >= 2.0 && dinero < 3.0) {
    alert(
      `El ${chico} puede comprar un helado de crema de dos bolas, su vuelta es de ${(
        dinero - 2.0
      ).toFixed(2)}`
    );
  } else if (dinero >= 3.0) {
    alert(
      `El ${chico} puede comprar un helado de chocolate de dos bolas, su vuelta es de ${(
        dinero - 3.0
      ).toFixed(2)}`
    );
  } else {
    alert("Error inesperado");
  }
};

pedirDatos();
helado(parseFloat(entradaChicoUno), "primer chico");
helado(parseFloat(entradaChicoDos), "segundo chico");
helado(parseFloat(entradaChicoTres), "tercer chico");
