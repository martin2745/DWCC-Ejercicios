let edad: number | null = parseInt(prompt("Por favor, introduce tu edad:"));

if (isNaN(edad)) {
  alert("Por favor, introduce un número válido para la edad.");
} else {
  let categoria: string | undefined;

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
      alert("Edad fuera del rango permitido.");
  }

  if (categoria) {
    alert("Eres un " + categoria + ".");
  }
}
