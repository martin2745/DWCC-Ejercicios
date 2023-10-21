class Telefono {
  constructor(color, marca, peso) {
    this.color = color;
    this.marca = marca;
    this.peso = peso;
    this.encendido = false;
  }

  encender() {
    if (this.encendido == false) {
      alert("Encendiendo el teléfono");
      this.encendido = true;
    } else {
      alert("Telefono encendido");
    }
  }

  apagar() {
    if (this.encendido == false) {
      alert("Telefono apagado");
    } else {
      alert("Apagando el teléfono");
      this.encendido = false;
    }
  }

  infoTelefono() {
    return `
        <h3 style="color: red;">Teléfono</h3>
		Color: <b>${this.color}</b></br>
		Marca: <b>${this.marca}</b></br>
		Peso: <b>${this.peso}</b></br>
		Encendido: <b>${this.encendido}</b></br>
		`;
  }
}

class SmartPhone extends Telefono {
  constructor(color, marca, peso, almacenamiento, rcp, rga, rto) {
    super(color, marca, peso);
    this.almacenamiento = almacenamiento;
    this.rcp = rcp;
    this.rga = rga;
    this.rto = rto;
  }

  static soySmartPhone() {
    alert(`Soy un teléfono de gama alta`);
  }

  infoTelefono() {
    return `
        <h3 style="color: green;">SmartPhone</h3>
		Color: <b>${this.color}</b></br>
		Marca: <b>${this.marca}</b></br>
		Peso: <b>${this.peso}</b></br>
		Encendido: <b>${this.encendido}</b></br>
		Encendido: <b>${this.almacenamiento}</b></br>
		Encendido: <b>${this.rcp}</b></br>
		Encendido: <b>${this.rga}</b></br>
		Encendido: <b>${this.rto}</b></br>
		`;
  }
}

let telefono1 = new Telefono("Rojo", "Samsung", "200g");
let telefono2 = new Telefono("Amarillo", "Motorola", "220g");
let telefono3 = new Telefono("Negro", "Nokia", "150g");

telefono1.encender();
telefono2.encender();
telefono3.encender();
telefono3.apagar();

telefono1.infoTelefono();
telefono2.infoTelefono();
telefono3.infoTelefono();

document.write(`
	${telefono1.infoTelefono()} <br><br>
	${telefono2.infoTelefono()} <br><br>
	${telefono3.infoTelefono()} <br>
`);

let smartPhone = new SmartPhone(
  "Blanco",
  "Iphone",
  "200g",
  "128GB",
  "48MP",
  "12MP",
  "12MP"
);

SmartPhone.soySmartPhone();
document.write(`
	${smartPhone.infoTelefono()} <br><br>
`);
