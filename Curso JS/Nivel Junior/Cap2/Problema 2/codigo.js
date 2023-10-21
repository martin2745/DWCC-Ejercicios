class Calculadora {
  sumar(num1, num2) {
    let numero1 = parseFloat(num1).toFixed(2);
    let numero2 = parseFloat(num2).toFixed(2);
    return parseFloat(numero1) + parseFloat(numero2);
  }
  restar(num1, num2) {
    let numero1 = parseFloat(num1).toFixed(2);
    let numero2 = parseFloat(num2).toFixed(2);
    return (parseFloat(numero1) - parseFloat(numero2)).toFixed(2);
  }
  multiplicar(num1, num2) {
    let numero1 = parseFloat(num1).toFixed(2);
    let numero2 = parseFloat(num2).toFixed(2);
    return parseFloat(numero1) * parseFloat(numero2);
  }
  dividir(num1, num2) {
    let numero1 = parseFloat(num1).toFixed(2);
    let numero2 = parseFloat(num2).toFixed(2);
    return parseFloat(numero1) / parseFloat(numero2);
  }
  potenciar(num, exp) {
    let numero = parseFloat(num).toFixed(2);
    let exponente = parseFloat(exp).toFixed(2);
    return parseFloat(Math.pow(numero, exponente)).toFixed(2);
  }
  raizCuadrada(num) {
    let numero = parseFloat(num).toFixed(2);
    return parseFloat(Math.sqrt(numero)).toFixed(2);
  }
  raizCubica(num) {
    let numero = parseFloat(num).toFixed(2);
    return parseFloat(Math.cbrt(numero)).toFixed(2);
  }
}

const validate = (dato1, dato2 = 0) => {
  if (isNaN(parseFloat(dato1)) || isNaN(parseFloat(dato2))) {
    alert("Los datos introducidos deben de ser números");
    return false;
  } else {
    return true;
  }
};

const operar = (operacion) => {
  let numero1, numero2;
  const calculadora = new Calculadora();

  switch (operacion) {
    case 1:
      numero1 = prompt("primer número para sumar");
      numero2 = prompt("segundo número para sumar");
      if (validate(numero1, numero2)) {
        resultado = calculadora.sumar(numero1, numero2);
        alert(`tu resultado es ${resultado}`);
      }
      break;
    case 2:
      numero1 = prompt("primer número para restar");
      numero2 = prompt("segundo número para restar");
      if (validate(numero1, numero2)) {
        resultado = calculadora.restar(numero1, numero2);
        alert(`tu resultado es ${resultado}`);
      }
      break;
    case 3:
      numero1 = prompt("primer número para dividir");
      numero2 = prompt("segundo número para dividir");
      if (validate(numero1, numero2)) {
        if (numero2 != "0") {
          resultado = calculadora.dividir(numero1, numero2);
          alert(`tu resultado es ${resultado}`);
        } else {
          alert("No se puede dividir por cero");
        }
      }
      break;
    case 4:
      numero1 = prompt("primer número para multiplicar");
      numero2 = prompt("segundo número para multiplicar");
      if (validate(numero1, numero2)) {
        resultado = calculadora.multiplicar(numero1, numero2);
        alert(`tu resultado es ${resultado}`);
      }
      break;
    case 5:
      numero1 = prompt("base");
      numero2 = prompt("exponente");
      if (validate(numero1, numero2)) {
        resultado = calculadora.potenciar(numero1, numero2);
        alert(`tu resultado es ${resultado}`);
      }
      break;
    case 6:
      numero1 = prompt("conocer la raíz cuadrada de:");
      if (validate(numero1)) {
        resultado = calculadora.raizCuadrada(numero1);
        alert(`tu resultado es ${resultado}`);
      }
      break;
    case 7:
      numero1 = prompt("conocer la raíz cúbica de:");
      if (validate(numero1)) {
        resultado = calculadora.raizCubica(numero1);
        alert(`tu resultado es ${resultado}`);
      }
      break;
    default:
      alert("no se ha encontrado la operación");
  }
};

const comenzar = () => {
  let start = true;

  while (start) {
    alert("¿Que operación deseas realizar?");
    let operacion = prompt(
      "1: suma,  2: resta,  3: división,  4: multiplicación,  5: potenciación,  6: raíz cuadrada,  7: raíz cúbica, 8: salir"
    );
    if (operacion == "8") {
      start = false;
      alert("Has salido del sistema");
    } else {
      operar(parseInt(operacion));
    }
  }
};

comenzar();
