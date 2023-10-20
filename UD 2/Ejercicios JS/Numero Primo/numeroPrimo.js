// Solicitar al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número para verificar si es primo:"));

// Función para verificar si un número es primo
const esPrimo = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
};

// Verificar si el número es primo
if (esPrimo(numero)) {
  alert(`${numero} es un número primo.`);
} else {
  alert(`${numero} no es un número primo.`);
}

/*
NUMERO PRIMO - EXPLICACIÓN DEL CÓDIGO JS

    Se utiliza prompt para solicitar al usuario que ingrese un número y se almacena en la variable número después de convertirlo a un entero con parseInt. Si emplearamos Number se convertirían tambien valores con decimales, algo que queremos evitar, de este modo, solo nos quedamos con la parte entera del número.

    Se define una función llamada esPrimo que toma un número num como argumento. Esta función se encarga de verificar si num es un número primo. Los números primos son aquellos que solo son divisibles por 1 y ellos mismos.

    Dentro de la función esPrimo, se realizan varias comprobaciones para determinar si el número es primo:
        Si num es menor o igual a 1, se considera que no es primo y se devuelve false.
        Si num es igual a 2 o 3, se considera primo y se devuelve true.
        Se verifica si num es divisible por 2 o 3. Si es divisible por alguno de estos números, se devuelve false.

    Después, el código entra en un bucle for que comienza desde 5 y continúa mientras el cuadrado del número actual (i * i) sea menor o igual a num. En cada iteración, se verifica si num es divisible por i o por i + 2. 
    Si es divisible por alguno de estos valores, se devuelve false, lo que indica que el número no es primo. Esta parte del código se basa en un algoritmo optimizado para verificar si un número es primo.

    Si ninguna de las condiciones anteriores se cumple, se considera que el número es primo y se devuelve true.

    Después de definir la función esPrimo, se verifica si el número ingresado por el usuario (numero) es primo llamando a esta función.

    Por último, se muestra un mensaje de alerta al usuario informándole si el número ingresado es primo o no.
*/
