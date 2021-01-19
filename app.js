const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'alala';
let tope = 10;

crearArchivo(base, tope)
    .then(archivo => console.log(`Archivo creado: ${archivo}`));