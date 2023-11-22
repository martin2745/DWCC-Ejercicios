function diasHastaFinalDeCurso() {
  const hoy = new Date();
  const finalDeCurso = new Date(hoy.getFullYear() + 1, 5, 25);

  const duracionDia = 1000 * 60 * 60 * 24;
  console.log("Día actual ", hoy);
  console.log("Final de curso ", finalDeCurso);
  console.log("Diferencia en milisegundos", finalDeCurso - hoy);
  console.log("Duración de un día en milisegundos", duracionDia);
  return Math.ceil((finalDeCurso - hoy) / duracionDia);
}

console.log("Días restantes hasta final de curso: " + diasHastaFinalDeCurso());

/*
  EXPLICACIÓN

    const hoy = new Date();: Se crea un objeto Date llamado hoy, que representa la fecha y hora actuales. 
    Este objeto contendrá la fecha y la hora exactas en el momento en que se ejecuta la función.

    const finalDeCurso = new Date(hoy.getFullYear(), 5, 25);: Se crea un objeto Date llamado finalDeCurso,
    que se establece en el 25 de junio del año actual. Como mencionaste, junio se representa como el mes 5 en JavaScript.

    const unDia = 1000 * 60 * 60 * 24;: Se define una constante unDia que representa la duración de un día 
    en milisegundos. Esto se calcula multiplicando 1000 milisegundos por 60 segundos por 60 minutos por 24 horas.

    return Math.ceil((finalDeCurso - hoy) / unDia);: Aquí se calcula la diferencia en milisegundos entre la 
    fecha de final de curso (finalDeCurso) y la fecha actual (hoy). Luego, se divide esta diferencia por unDia
    para obtener la diferencia en días. La función Math.ceil se utiliza para redondear hacia arriba a un número
    entero, ya que no puede haber un número fraccional de días restantes.
*/

/*******************************************************************************/

function aniversarioEnFinDeSemana() {
  const tuAniversario = new Date("2023-10-31");

  const inicioAnho = new Date();
  inicioAnho.setMonth(0);
  inicioAnho.setDate(1);

  const anos = [];
  while (inicioAnho.getFullYear() <= 2100) {
    if (tuAniversario.getDay() === 0 || tuAniversario.getDay() === 6) {
      anos.push(inicioAnho.getFullYear());
    }
    inicioAnho.setFullYear(inicioAnho.getFullYear() + 1);
    tuAniversario.setFullYear(inicioAnho.getFullYear());
  }

  return anos;
}

console.log(
  "Años en los que tu aniversario caerá en fin de semana: " +
    aniversarioEnFinDeSemana()
);

/*
  EXPLICACIÓN

    Se crea una instancia de la clase Date llamada tuAniversario que representa la fecha de tu aniversario,
    que se establece en "2023-10-31".

    Se crean dos instancias de la clase Date llamadas inicioAnho y finAnho que se utilizan para representar
    el inicio y el final del año respectivamente. Inicialmente, ambas fechas están configuradas en la fecha actual.

    Se actualiza la fecha inicioAnho para que represente el primer día del año, es decir, el 1 de enero,
    utilizando setMonth(0) y setDate(1). Se hace lo mismo con finAnho, estableciendo el 31 de diciembre.

    Se crea un arreglo vacío llamado anos que se utilizará para almacenar los años en los que tu aniversario
    cae en un fin de semana.

    Se inicia un bucle while que se ejecutará mientras el año representado por inicioAnho sea menor o igual a 2100.

    En cada iteración del bucle, se verifica si el día de la semana de tuAniversario es igual a 0 (domingo) o
    6 (sábado) utilizando tuAniversario.getDay(). Si es así, se agrega el año representado por inicioAnho al arreglo anos.

    Luego, se incrementa el año de inicioAnho en 1 utilizando setFullYear y se actualiza la fecha de tuAniversario
    para que coincida con el nuevo año. Esto es importante para asegurarse de que la fecha de tu aniversario se 
    ajuste al año actual en cada iteración.

    Una vez que el bucle haya recorrido todos los años desde el año actual hasta el 2100, se devuelven los años 
    en los que tu aniversario cae en un fin de semana, que están almacenados en el arreglo anos.
*/

/*******************************************************************************/

function formatoHora(opcion) {
  const horaActual = new Date();
  switch (opcion) {
    case 1:
      return horaActual.toLocaleTimeString();
    case 2:
      return horaActual.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    default:
      return "Opción no válida";
  }
}

console.log(formatoHora(1)); // Formato 1
console.log(formatoHora(2)); // Formato 2

/*
  EXPLICACIÓN

    Se crea una instancia de la clase Date llamada horaActual, que representa la hora y la fecha
    actuales en el momento en que se llama la función.

    Se utiliza una declaración switch para evaluar el valor del parámetro opcion.

    En el caso 1, se utiliza horaActual.toLocaleTimeString() para formatear la hora actual
    como una cadena en el formato de hora predeterminado según las convenciones locales del
    navegador. Esto significa que la salida variará según la configuración regional y de idioma
    del usuario.

    En el caso 2, se utiliza horaActual.toLocaleString("en-US", {...}) para formatear la hora
    actual en inglés de Estados Unidos. Se configura para mostrar la hora y los minutos en un
    formato de dos dígitos, como "02:30 PM". La opción "en-US" establece el idioma y la región
    para el formato en inglés de Estados Unidos.

    Si opcion no es igual a 1 o 2, se ejecutará el caso default, que devuelve la cadena "Opción
    no válida". Esto se hace para manejar cualquier valor de opcion que no esté en el rango de
    opciones válidas.
*/
