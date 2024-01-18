const operaciones = require('./operaciones');

const [, , operacion, ...args] = process.argv;

if (operacion === 'registrar') {
  const [nombre, edad, animal, color, enfermedad] = args;
  operaciones.registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
  operaciones.leer();
} else {
  console.log('Operación no válida. Las opciones son "registrar" o "leer".');
}

