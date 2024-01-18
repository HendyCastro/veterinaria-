// operaciones.js

const fs = require('fs');
const citasFile = 'citas.json';

function registrar(nombre, edad, animal, color, enfermedad) {
  const citas = JSON.parse(fs.readFileSync(citasFile, 'utf-8'));

  citas.push({
    nombre,
    edad,
    animal,
    color,
    enfermedad
  });

  fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2));
  console.log('Cita registrada correctamente.');
}

function leer() {
  const citas = JSON.parse(fs.readFileSync(citasFile, 'utf-8'));

  if (citas.length === 0) {
    console.log('No hay citas registradas.');
  } else {
    console.log('Citas registradas:');
    citas.forEach((cita, index) => {
      console.log(`${index + 1}. Nombre: ${cita.nombre}, Edad: ${cita.edad}, Animal: ${cita.animal}, Color: ${cita.color}, Enfermedad: ${cita.enfermedad}`);
    });
  }
}

module.exports = { registrar, leer };
