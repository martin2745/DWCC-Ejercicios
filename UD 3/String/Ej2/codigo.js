function validarContrasena(contrasena) {
  // Verificar longitud de la contraseña
  if (contrasena.length < 8 || contrasena.length > 16) {
    return false;
  }

  // Verificar si hay al menos una mayúscula
  if (contrasena.toUpperCase() === contrasena) {
    return false;
  }

  // Verificar si hay al menos una minúscula
  if (contrasena.toLowerCase() === contrasena) {
    return false;
  }

  // Verificar si hay al menos un número
  if (!/\d/.test(contrasena)) {
    return false;
  }

  // Verificar si hay al menos un carácter especial
  if (!/[_,\-@#$%&]/.test(contrasena)) {
    return false;
  }

  // Si todas las condiciones se cumplen, la contraseña es válida
  return true;
}

// Ejemplo de uso
let contrasenaUsuario = prompt("Introduce tu contraseña: ");
if (validarContrasena(contrasenaUsuario)) {
  console.log("Contraseña válida.");
} else {
  console.log("Contraseña no válida. Asegúrate de cumplir con los requisitos.");
}
