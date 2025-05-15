// Modo Asíncrono de Callback

const fs = require("node:fs");

console.log("Lee el archivo 1");
fs.readFile("archivo.txt", "utf-8", (err, text) => {
  console.log("First Text: ", text);
});

console.log("Procesando...");

console.log("Lee el archivo 2");
fs.readFile("archivo2.txt", "utf-8", (err, text) => {
  console.log("Second Text: ", text);
});

console.log("Fin del programa");
