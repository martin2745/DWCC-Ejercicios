let edad = prompt("Por favor, introduce a túa idade:");

edad = parseInt(edad);

if (isNaN(edad)) {
  alert("Por favor, introduce un número válido para a idade.");
} else {
  let categoria;

  if (edad >= 0 && edad <= 12) {
    categoria = "neno";
  } else if (edad >= 13 && edad <= 18) {
    categoria = "adolescente";
  } else if (edad >= 19 && edad <= 30) {
    categoria = "xoven";
  } else if (edad >= 31 && edad <= 64) {
    categoria = "adulto";
  } else if (edad >= 65 && edad <= 100) {
    categoria = "xubilado";
  } else {
    alert("Idade fora do rango permitido.");
  }

  if (categoria) {
    alert("Eres " + categoria + ".");
  }
}

/*
EJERICICIO - EXPLICACIÓN DEL CÓDIGO JS

    let edad = prompt("Por favor, introduce a túa idade:");: Declara una variable llamada edad y utiliza la función prompt para mostrar un cuadro de diálogo en el navegador que solicita al usuario que ingrese su edad. La entrada del usuario se almacena en la variable edad.

    edad = parseInt(edad);: Convierte la entrada del usuario, que se almacena como una cadena (texto), en un número entero utilizando la función parseInt. Esto asegura que el valor ingresado se pueda comparar con números en las siguientes líneas.

    if (isNaN(edad)) { ... }: Verifica si la variable edad no es un número (NaN, que significa "Not-a-Number"). Si la entrada del usuario no es un número válido, muestra un mensaje de alerta que indica que deben ingresar un número válido.

    Si la entrada del usuario es un número válido, el código pasa al siguiente bloque:

    let categoria;: Declara una variable llamada categoria que se utilizará para almacenar la categoría de edad a la que pertenece el usuario.

    A continuación, se utilizan múltiples declaraciones if...else if... para determinar la categoría de edad en función del valor de edad. Cada bloque if verifica si edad se encuentra en un rango específico y, si es así, asigna la categoría correspondiente a la variable categoria.

    Si ninguno de los bloques if coincide con la edad del usuario, se ejecuta el else final, que muestra un mensaje de alerta indicando que la edad está fuera del rango permitido.

    Finalmente, después de determinar la categoría de edad (si se encuentra en un rango válido), el código verifica si la variable categoria tiene un valor (si no está vacía) y muestra un mensaje de alerta que incluye la categoría de edad.
*/
