let nuevaVentana;

// Función para abrir la nueva ventana
function abrirVentana() {
  // Preguntar al usuario si desea abrir la nueva ventana
  const confirmacion = confirm("¿Desea abrir la nueva ventana?");

  // Si el usuario confirma, abrir la ventana emergente
  if (confirmacion) {
    nuevaVentana = window.open(
      "",
      "_blank",
      "width=300,height=300,toolbar=no,menubar=no,left=400,top=400"
    );

    // Verificar si la ventana emergente se abrió con éxito
    if (nuevaVentana) {
      // Crear un documento HTML dentro de la nueva ventana
      nuevaVentana.document.write(`
        <html>
        <head>
          <title>Ventana Nueva</title>
        </head>
        <body>
          <h3>Exemplo de Ventá nova</h3>
          <p>URL: ${window.location.href}</p>
          <p>Protocolo: ${window.location.protocol}</p>
          <p>Navegador: ${navigator.userAgent}</p>
          <p>Java disponible: ${navigator.javaEnabled() ? "Sí" : "No"}</p>
        </body>
        </html>
      `);

      // Mantener la ventana emergente visible
      nuevaVentana.focus();
    } else {
      alert(
        "El navegador bloqueó la ventana emergente. Habilita las ventanas emergentes en la configuración del navegador."
      );
    }
  }
}

// Función para cerrar la ventana emergente
function cerrarVentana() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.close();
  } else {
    alert("La ventana emergente ya está cerrada.");
  }
}

// Función para mover la ventana emergente
function moverVentana() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.moveBy(50, 50);
  }
}

// Función para aumentar el tamaño de la ventana emergente
function aumentarTamaño() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.resizeBy(50, 50);
  }
}

// Función para redimensionar la ventana emergente
function redimensionar() {
  if (nuevaVentana && !nuevaVentana.closed) {
    nuevaVentana.resizeTo(500, 500);
  }
}
