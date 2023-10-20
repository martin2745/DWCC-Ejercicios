const mostrarTabla = (event: Event) => {
  event.preventDefault();
  let numeroInput: HTMLInputElement | null = document.querySelector("#numero");
  let tabla: HTMLDivElement | null = document.querySelector("#tabla");

  if (numeroInput && tabla) {
    let numero: number = Number(numeroInput.value);

    if (numero >= 0 && numero <= 10) {
      let tablaMultiplicar: string = `<h2>Tabla de multiplicar del número ${numero}</h2>`;
      tablaMultiplicar += "<ul>";

      for (let i: number = 0; i <= 10; i++) {
        tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`;
      }

      tablaMultiplicar += "</ul>";
      tabla.innerHTML = tablaMultiplicar;
    } else {
      alert("El número introducido debe estar entre 0 y 10 (ambos inclusive)");
      numeroInput.value = "";
    }
  }
};

/*
TABLA DE MULTIPLICAR - EXPLICACIÓN DEL CÓDIGO JS

    1) Función Arrow: La función mostrarTabla es una función de flecha (arrow function) que toma un parámetro event de tipo Event. Esta función se utilizará para manejar un evento, como hacer clic en un botón o enviar un formulario.

    2) event.preventDefault(): Al principio de la función, se llama al método preventDefault() en el objeto event para evitar que la acción predeterminada del evento ocurra. Esto es común en la manipulación de formularios para evitar que la página se recargue cuando se envía un formulario. 
       Fijate que en el caso del HTML, esta vez, a diferencia de JS, hemos tenido que indicar entre los parentesis el evento como parametro.

    3) Selección de elementos HTML: La función utiliza el método document.querySelector() para seleccionar dos elementos HTML por su ID. numeroInput se refiere a un elemento de entrada (<input>) con el ID "numero", y tabla se refiere a un elemento de tipo <div> con el ID "tabla". Estos elementos se utilizan más adelante en la función.

    4) Verificación de existencia de elementos: Se verifica si tanto numeroInput como tabla son diferentes de null. Esto se hace para asegurarse de que los elementos HTML con los ID especificados existen en el documento antes de continuar.

    5) Obtención del número: Si los elementos existen, se obtiene el valor del elemento de entrada como un número y se almacena en la variable numero.

    6) Validación del número: Se verifica si el número está dentro del rango de 0 a 10 (inclusive). Si no lo está, muestra una alerta con un mensaje de error y limpia el valor del elemento de entrada.

    7) Generación de la tabla de multiplicar: Si el número es válido, se genera una cadena de texto HTML llamada tablaMultiplicar que contiene una etiqueta <h2> con el número y una lista desordenada (<ul>) que contendrá las multiplicaciones.

    8) Bucle for: Se utiliza un bucle for para generar las filas de la tabla de multiplicar. Comienza desde 0 y se ejecuta hasta que i sea menor o igual a 10. En cada iteración, se agrega una nueva entrada a la lista desordenada con la multiplicación correspondiente.

    9) Actualización del contenido HTML: Después de generar la tabla de multiplicar, se actualiza el contenido HTML del elemento con ID "tabla" (tabla.innerHTML) con la cadena tablaMultiplicar. Esto mostrará la tabla en la página.
*/
