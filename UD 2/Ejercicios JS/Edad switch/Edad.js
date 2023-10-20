let edad = prompt("Por favor, introduce a túa idade:");
edad = parseInt(edad);

if (isNaN(edad)) {
  alert("Por favor, introduce un número válido para a idade.");
} else {
  let categoria;

  switch (true) {
    case edad >= 0 && edad <= 12:
      categoria = "neno";
      break;
    case edad >= 13 && edad <= 18:
      categoria = "adolescente";
      break;
    case edad >= 19 && edad <= 30:
      categoria = "xoven";
      break;
    case edad >= 31 && edad <= 64:
      categoria = "adulto";
      break;
    case edad >= 65 && edad <= 100:
      categoria = "xubilado";
      break;
    default:
      alert("Idade fora do rango permitido.");
  }

  if (categoria) {
    alert("Eres un " + categoria + ".");
  }
}

/*
EJERICICIO - EXPLICACIÓN DEL CÓDIGO JS
    let edad = prompt("Por favor, introduce a túa idade:");: Esto declara una variable llamada edad y utiliza la función prompt para mostrar un cuadro de diálogo en el navegador que le pide al usuario que ingrese su edad. La entrada del usuario se almacena en la variable edad.

    edad = parseInt(edad);: Convierte la entrada del usuario, que se almacena como una cadena (texto), en un número entero utilizando la función parseInt. Esto asegura que el valor ingresado se pueda comparar con números en las siguientes líneas.

    if (isNaN(edad)) { ... }: Verifica si la variable edad no es un número ("Not-a-Number"). Si la entrada del usuario no es un número válido, muestra un mensaje de alerta indicando que deben ingresar un número válido.

    Si la entrada del usuario es un número válido, el código pasa al siguiente bloque:

    let categoria;: Declara una variable llamada categoria que se utilizará para almacenar la categoría de edad a la que pertenece el usuario.

    Se utiliza una estructura switch con switch (true) para evaluar múltiples condiciones. Este enfoque permite verificar varias condiciones y ejecutar código en función de cuál sea verdadera.

    Cada caso dentro del switch compara la variable edad con un rango específico de edades y, en función de la coincidencia, establece la variable categoria en un valor específico. Por ejemplo, si edad está entre 0 y 12, se establece categoria en "neno".

    Si la edad no coincide con ninguno de los casos, se ejecuta la sección default y se muestra un mensaje de alerta que indica que la edad está fuera del rango permitido.

    Después de determinar la categoría de edad (si se encuentra en un rango válido), el código verifica si la variable categoria tiene un valor (si no está vacía) y muestra un mensaje de alerta que incluye la categoría de edad.
*/
