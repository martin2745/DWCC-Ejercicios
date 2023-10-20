let edad: number | null = parseInt(
  prompt("Por favor, introduce a túa idade:"),
  10
);

if (isNaN(edad)) {
  alert("Por favor, introduce un número válido para a idade.");
} else {
  let categoria: string | undefined;

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
