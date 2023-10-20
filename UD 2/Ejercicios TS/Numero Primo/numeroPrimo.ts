let numero: number = parseInt(
  prompt("Ingrese un número para verificar si es primo:")
);

if (isNaN(numero)) {
  alert("No ha ingresado un número válido.");
} else {
  const esPrimo = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }

    return true;
  };

  if (esPrimo(numero)) {
    alert(`${numero} es un número primo.`);
  } else {
    alert(`${numero} no es un número primo.`);
  }
}
