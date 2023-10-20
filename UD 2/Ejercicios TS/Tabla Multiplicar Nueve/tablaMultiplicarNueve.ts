const tablaMultiplicarNueve = () => {
  let numero: number = 9;
  let tabla: HTMLDivElement | null = document.querySelector("#tabla");
  let tablaMultiplicar: string = `<h2>Tabla de multiplicar del número ${numero}</h2>`;

  tablaMultiplicar += "<ul>";
  for (let i: number = 0; i <= 10; i++) {
    tablaMultiplicar += `<li>${numero} * ${i} = ${numero * i}</li>`;
  }
  tablaMultiplicar += "</ul>";

  if (tabla) {
    tabla.innerHTML = tablaMultiplicar;
  }
};

/* 
La razón de declarar la variable tabla como HTMLElement | null se debe a que el método document.getElementById("tabla")
puede devolver null en caso de que no se encuentre ningún elemento en el DOM con el ID "tabla". Si no declaras tabla
como HTMLElement | null, TypeScript te mostrará un error en tiempo de compilación si intentas acceder a las propiedades
de un valor potencialmente nulo.

Por otra parte, en TypeScript se suele emplear querySelector en lugar de getElementById. En el caso de querySelector("#idDeMiElemento"),
la principal diferencia entre getElementById y querySelector desaparece en ese contexto específico.
*/
