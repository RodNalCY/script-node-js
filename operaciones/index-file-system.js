const fs = require("node:fs");

const stats = fs.statSync("archivo.txt");

console.log(
  stats.isFile(), // Verifica si es un archivo
  stats.isDirectory(), // Verifica si es un directorio
  stats.isSymbolicLink(), // Verifica si es un enlace simbólico
  stats.size // Tamaño del archivo en bytes
);
