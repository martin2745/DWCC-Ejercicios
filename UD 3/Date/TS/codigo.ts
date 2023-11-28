function diasHastaFinalDeCurso(): number {
  const hoy = new Date();
  const finalDeCurso = new Date(hoy.getFullYear() + 1, 5, 25);

  const duracionDia = 1000 * 60 * 60 * 24;
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
  const tuAniversario = new Date("2023-10-31");

  const inicioAnho = new Date();
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

console.log(
  "Años en los que tu aniversario caerá en fin de semana: " +
    aniversarioEnFinDeSemana()
);

/*******************************************************************************/

function formatoFecha(opcion: number): string {
  const fechaActual = new Date();
  switch (opcion) {
    case 1:
      return fechaActual.toLocaleDateString();
    case 2:
      return fechaActual.toLocaleString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case 3:
      return fechaActual.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    default:
      return "Opción no válida";
  }
}

console.log(formatoFecha(1)); // Formato 1
console.log(formatoFecha(2)); // Formato 2
console.log(formatoFecha(3)); // Formato 3

/*******************************************************************************/

function formatoHora(opcion: number): string {
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
