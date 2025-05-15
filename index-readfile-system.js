// Modo Síncrono JS
// const fs = require("node:fs");
/*console.log("Lee el archivo 1");
const firstText = fs.readFileSync("archivo.txt", "utf-8");
console.log(firstText);

console.log("Procesando...");

console.log("Lee el archivo 2");
const secondText = fs.readFileSync("archivo2.txt", "utf-8");
console.log(secondText);
*/

// Modo Asíncrono JS (Callback)
// const fs = require("node:fs");

// console.log("Lee el archivo 1");
// fs.readFile("archivo.txt", "utf-8", (err, text) => {
//   console.log("First Text: ", text);
// });

// console.log("Procesando...");

// console.log("Lee el archivo 2");
// fs.readFile("archivo2.txt", "utf-8", (err, text) => {
//   console.log("Second Text: ", text);
// });

// console.log("Fin del programa");

// Modo Promesas
// const fs = require("node:fs/promises");

// console.log("Lee el archivo 1");
// fs.readFile("archivo.txt", "utf-8").then((text) => {
//   console.log("First Text: ", text);
// });

// console.log("Procesando...");

// console.log("Lee el archivo 2");
// fs.readFile("archivo2.txt", "utf-8").then((text) => {
//   console.log("Second Text: ", text);
// });

// console.log("Fin del programa");

// Modo Convierte en los modulos Nativos a Promesas
const fs = require("node:fs");
const { promisify } = require("node:util");

const readFilePromise = promisify(fs.readFile);

console.log("Lee el archivo 1");
readFilePromise("archivo.txt", "utf-8").then((text) => {
  console.log("First Text: ", text);
});

console.log("Procesando...");

console.log("Lee el archivo 2");
readFilePromise("archivo2.txt", "utf-8").then((text) => {
  console.log("Second Text: ", text);
});

console.log("Fin del programa");
