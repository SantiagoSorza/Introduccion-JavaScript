/*Funciones o metodos*/
function saludar(nombre, apellido) {
  console.log(`Hola ${nombre} ${apellido}`);
}
saludar("Juan", "Perez");

/*Retornar*/
function saludo(nombre, apellido) {
  return `Hola ${nombre} ${apellido}`;
}
console.log(saludo("Ana", "Gomez"));

const saludarDos = function (nombre) {
  console.log(`Hola ${nombre}`);
};
saludarDos("Pepe");

const saludoDos = function (nombre) {
  return `Hola ${nombre}`;
};
console.log(saludarDos("Mateo"));

const saludarTres = (nombre) => console.log(`Hola ${nombre}`);
saludarTres("Pepe");

const saludoTres = (nombre) => {
  return `Hola ${nombre}`;
};
console.log(saludarTres("Mateo"));

/*Objetos*/

class Persona {
  nombre = " ";
  apellido = "";
  edad = 0;
  email = " ";

  setNombre(value) {
    this.nombre = value;
  }

  getNombre() {
    return this.nombre;
  }
}

let persona = new Persona();
persona.setNombre("Pepe");
persona.edad = 26;
persona.apellido = "Torres";

const personaDos = {
  nombre: "Juan",
  apellido: "Pepe",
  edad: 21,
  jobs: ["Dibujar,Series,Peliculas"],
}; //{} representa un objecto

personaDos.nombre = "Pedro";
console.log(personaDos.apellido);
console.log(personaDos["edad"]);
const contactos = [
  { nombre: "Ana", edad: 23, telefono: 12345, email: "ejemplo1@test.com" },
  { nombre: "Pepe", edad: 28, telefono: 5555, email: "ejemplo2@test.com" },
  { nombre: "Maria", edad: 25, telefono: 4444, email: "ejemplo3@test.com" },
  { nombre: "Carlos", edad: 33, telefono: 33333, email: "ejemplo4@test.com" },
];

console.log(contactos[2].telefono);

console.log(contactos.length);

contactos.push({
  //agragar al ultimo de la lista
  nombre: "Angela",
  edad: 37,
  telefono: 55436,
  email: "ejemplo5@test.com",
});
console.log(contactos);
contactos.unshift({
  //agregar al comienzo de la lista
  nombre: "Pedro",
  edad: 39,
  telefono: 4412,
  email: "ejemplo6@test.com",
});
console.log(contactos);
contactos[0] = {
  //agregar al comienzo de la lista//
  nombre: "Pedro",
  edad: 89,
  telefono: 4412,
  email: "ejemplo7@test.com",
};
console.log(contactos);
const contactosDos = [
  { nombre: "Maria", edad: 29, telefono: 6453, email: "ejemplo8@test.com" },
  { nombre: "Carlos", edad: 88, telefono: 45645, email: "ejemplo9@test.com" },
];
const contactosTres = contactos.concat(contactosDos); //añadir a la lista
console.log(contactosTres);

const order = [...contactosTres].sort((a, b) => b.edad - a.edad); //[...nombre] no hace que modifique la original
console.log(order);
const contacto = contactosTres.find(
  (item) => item.email == "ejemplo5@test.com"
);
console.log(contacto);
const filtro = contactosTres.filter((item) => item.edad >= 26);
console.log(filtro);

const lista = [...contactosTres].map((item) => {
  return {
    nombre: item.nombre,
    email: item.email,
  };
});

console.log(lista);

const paresImpares = contactosTres.map((item) => {
  if (item.edad % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
});
console.log(paresImpares);
//o

const paresImparess = contactosTres.map((item) =>
  (item.edad % 2 )== 0? "par" : "impar"
);
console.log(paresImparess);
