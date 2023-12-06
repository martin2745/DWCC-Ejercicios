function diasHastaFinalDeCurso(): number {
  const hoy: Date = new Date();
  const finalDeCurso: Date = new Date(hoy.getFullYear() + 1, 5, 25);

  const duracionDia: number = 1000 * 60 * 60 * 24;
  console.log("Ejercicio 1");
  console.log("Día actual ", hoy);
  console.log("Final de curso ", finalDeCurso);
  console.log(
    "Diferencia en milisegundos",
    finalDeCurso.getTime() - hoy.getTime()
  );
  console.log("Duración de un día en milisegundos", duracionDia);
  return Math.ceil((finalDeCurso.getTime() - hoy.getTime()) / duracionDia);
}

console.log("Días restantes hasta final de curso: " + diasHastaFinalDeCurso());

/*******************************************************************************/

function aniversarioEnFinDeSemana(): number[] {
  const tuAniversario: Date = new Date(
    prompt("Introduce una fecha en formato YYYY-MM-DD")
  );

  const inicioAnho: Date = new Date();
  inicioAnho.setMonth(0);
  inicioAnho.setDate(1);

  const anos: number[] = [];

  while (inicioAnho.getFullYear() <= 2100) {
    if (tuAniversario.getDay() === 0 || tuAniversario.getDay() === 6) {
      anos.push(inicioAnho.getFullYear());
    }
    inicioAnho.setFullYear(inicioAnho.getFullYear() + 1);
    tuAniversario.setFullYear(inicioAnho.getFullYear());
  }

  return anos;
}

console.log("\nEjercicio 2");
console.log(
  "Años en los que tu aniversario caerá en fin de semana: " +
    aniversarioEnFinDeSemana()
);

/*******************************************************************************/

function mostrarFechaEnFormato3(formato: string): void {
  const opcionesFecha = { day: "numeric", month: "numeric", year: "numeric" };
  const opcionesDiaSemana = { weekday: "long" };
  const opcionesMesCompleto = { month: "long" };

  const fechaActual: Date = new Date();

  switch (formato) {
    case "1":
      console.log(fechaActual.toLocaleDateString("es-ES", opcionesFecha));
      break;
    case "2":
      const diaSemana = fechaActual.toLocaleDateString(
        "es-ES",
        opcionesDiaSemana
      );
      const dia = fechaActual.getDate();
      const mesCompleto = fechaActual.toLocaleDateString(
        "es-ES",
        opcionesMesCompleto
      );
      const año = fechaActual.getFullYear();

      console.log(`${diaSemana}, ${dia} de ${mesCompleto} de ${año}`);
      break;
    case "3":
      const dayOfWeek = fechaActual.toLocaleDateString("en-US", {
        weekday: "long",
      });
      const month = fechaActual.toLocaleDateString("en-US", { month: "long" });
      const day = fechaActual.getDate();
      const year = fechaActual.getFullYear();

      console.log(`${dayOfWeek}, ${month} ${day}, ${year}`);
      break;
    default:
      console.log("Formato no válido. Introduce 1, 2 o 3.");
  }
}

// Prueba del programa
const formatoUsuario3: string = prompt(
  "Introduce el formato \n1 17/02/2016, \n2 Mércores, 17 de febreiro de 2016 \n3 Wednesday, February 17, 2016"
);
console.log("\nEjercicio 3");
mostrarFechaEnFormato3(formatoUsuario3);

/*******************************************************************************/

function formatoHora(opcion: string): string {
  const horaActual: Date = new Date();
  switch (opcion) {
    case "1":
      return horaActual.toLocaleTimeString("es-ES");
    case "2":
      return horaActual.toLocaleString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    default:
      return "Opción no válida";
  }
}

const formatoUsuario4: string = prompt(
  "Introduce el formato \n1 14:35:07, \n2 02:35 PM ou 02:35 AM"
);

console.log("\nEjercicio 4");
console.log(formatoHora(formatoUsuario4));
