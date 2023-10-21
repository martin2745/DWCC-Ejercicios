let materias = {
  fisica: ["Perez", "pedro", "pepito", "arturo", "maria"],
  programacion: ["Martín", "pedro", "juan", "pepito"],
  logica: ["Hernandez", "pedro", "juan", "pepito", "arturo", "maria"],
  quimica: ["Rodriguez", "pedro", "juan", "pepito", "arturo", "maria"],
};

const inscribir = (alumno, materia) => {
  personas = materias[materia];
  if (personas.length >= 21) {
    document.write(
      `<b style="color:red">Lo siento ${alumno}</b>, las clases de ${materia} ya estan llenas<br><br>`
    );
  } else if (!personas.includes(alumno)) {
    personas.push(alumno);
    switch (materia) {
      case "fisica":
        materias = {
          fisica: personas,
          programacion: materias["programacion"],
          logica: materias["logica"],
          quimica: materias["quimica"],
        };
        break;
      case "programacion":
        materias = {
          fisica: materias["fisica"],
          programacion: personas,
          logica: materias["logica"],
          quimica: materias["quimica"],
        };
        break;
      case "logica":
        materias = {
          fisica: materias["fisica"],
          programacion: materias["programacion"],
          logica: personas,
          quimica: materias["quimica"],
        };
        break;
      case "quimica":
        materias = {
          fisica: materias["fisica"],
          programacion: materias["programacion"],
          logica: materias["logica"],
          quimica: personas,
        };
        break;
      default:
        document.write(
          `<b style="color:red">Lo siento ${alumno}</b>, la materia de ${materia} no existe en el sistema<br><br>`
        );
    }
    document.write(
      `<b style="color:green">¡Felicidades ${alumno}!</b> te has inscrito a ${materia} correctamente.<br><br>`
    );
  } else {
    document.write(
      `<b style="color:red">Lo siento ${alumno}</b>, ya estás anotado a la materia de ${materia}<br>${materias[materia]}<br><br>`
    );
  }
};

inscribir("pedrito", "fisica");
inscribir("jorge", "fisica");
inscribir("ramses", "logica");
inscribir("pedrito", "fisica");
inscribir("jorge", "programacion");
inscribir("jorge", "matematicas");
