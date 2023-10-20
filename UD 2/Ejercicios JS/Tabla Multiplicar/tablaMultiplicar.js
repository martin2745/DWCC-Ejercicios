const mostrarTabla = () => {
  this.event.preventDefault();
  const numero = Number(document.getElementById("numero").value);
  if (numero >= 0 && numero <= 10) {
    let tabla = document.getElementById("tabla");
    let tablaMultiplicar = `<h2>Tabla de multiplicar del número ${numero}</h2>`;

    tablaMultiplicar += "<ul>";
    for (let i = 0; i <= 10; i++) {
      tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`;
    }
    tablaMultiplicar += "</ul>";

    tabla.innerHTML = tablaMultiplicar;
  } else {
    alert("El número introducido debe estar entre 0 y 10 (ambos inclusive");
    document.getElementById("numero").value = "";
  }
};

/*
TABLAS DE MULTIPLICAR - EXPLICACIÓN DEL CÓDIGO JS

Declaramos una función mostrarTabla que es de tipo flecha. Existen diferentes formas de crear estas funciones, la forma
tradicional seria:

  function mostrarTabla(){
    ...Código...
  }

De todos modos este tipo de funciones flecha tienen ventajas, para comprenderlas bien podemos decir que:

  function nombreFuncion(parametros){...Código...}

  Es equivalente a decir:

  const nombreFuncion = (parametros) => {...Código...}

Estas funciones flecha no necesitan return y si solo tienen un parametro no es necesario especificarlo entre parentesis. Son muy empleadas
ya que hacen el código más legible.

### RESTO DEL CÓDIGO ###

    1) const mostrarTabla = () => {: Esto define una función llamada mostrarTabla utilizando una función flecha (arrow function). Esta función se ejecutará cuando se envíe el formulario en la página web.

    2) this.event.preventDefault();: Se realiza para evitar que el formulario se envíe y la página se recargue, lo que es el comportamiento predeterminado de un formulario. Esto permite que la función maneje el envío del formulario de manera personalizada.

    3) const numero = Number(document.getElementById("numero").value);: Esto obtiene el valor ingresado en el campo de entrada con el id "numero" del formulario. Con document.getElementById("numero"), se selecciona el elemento HTML con ese id, y .value se utiliza para obtener el valor de ese campo de entrada. La función Number() se utiliza para convertir el valor a un número.
       Esto tiene que ver con el concepto de casteo en JS, te lo explico a continuación:

        parseInt() y parseFloat(): Estas funciones se utilizan para convertir una cadena en un número entero o de punto flotante, respectivamente.
          
            let str = "42";
            let num = parseInt(str); // num es 42

        Number(): Esta función puede utilizarse para convertir cualquier valor en un número.

            let str = "3.14";
            let num = Number(str); // num es 3.14

        String(): Puedes utilizar esta función para convertir cualquier valor en una cadena.

            let num = 42;
            let str = String(num); // str es "42"

        Boolean(): Para convertir cualquier valor en un booleano (true o false).

            let valor = "Hola";
            let esVerdadero = Boolean(valor); // esVerdadero es true

    4) if (numero >= 0 && numero <= 10) {: Se inicia una estructura condicional. Verifica si el número ingresado se encuentra en el rango de 0 a 10 (ambos inclusive).

    5) let tabla = document.getElementById("tabla");: Esto selecciona el elemento con el id "tabla" en la página web y lo almacena en una variable llamada tabla. Este elemento se utilizará para mostrar la tabla de multiplicar.

    6) let tablaMultiplicar = <h2>Tabla de multiplicar del número ${numero}</h2>;: Aquí se crea una cadena HTML que incluye un título (<h2>) con el número ingresado. Esta cadena se almacena en la variable tablaMultiplicar.

    7) tablaMultiplicar += "<ul>";: Se agrega la etiqueta de inicio de una lista desordenada a la cadena tablaMultiplicar.

    8) El siguiente bloque de código utiliza un bucle for para generar las filas de la tabla de multiplicar. Itera desde 0 hasta 10 (inclusive) y agrega cada fila de la tabla a la cadena tablaMultiplicar. Cada fila contiene el cálculo de la multiplicación y se crea en formato de lista (<li>).

    9) tablaMultiplicar += "</ul>";: Se agrega la etiqueta de cierre de la lista desordenada a la cadena tablaMultiplicar.

    10) tabla.innerHTML = tablaMultiplicar;: Finalmente, se establece el contenido HTML del elemento con id "tabla" con la cadena tablaMultiplicar, lo que mostrará la tabla de multiplicar en la página.

    11) En el caso de que el número ingresado no esté en el rango entre 0 y 10, se muestra una alerta con un mensaje y se borra el contenido del campo de entrada.

*/
