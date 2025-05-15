import fs from "node:fs/promises";

console.log("Lee el archivo 1");
const firstText = await fs.readFile("archivo.txt", "utf-8");
console.log("First Text: ", firstText);

console.log("Procesando...");

console.log("Lee el archivo 2");
const secondText = await fs.readFile("archivo2.txt", "utf-8");
console.log("Second Text: ", secondText);

console.log("Fin del programa");

// Modo Convierte los modulos Nativos a Promesas
// const fs = require("node:fs");
// const { promisify } = require("node:util");

// const readFilePromise = promisify(fs.readFile);

// console.log("Lee el archivo 1");
// readFilePromise("archivo.txt", "utf-8").then((text) => {
//   console.log("First Text: ", text);
// });

// console.log("Procesando...");

// console.log("Lee el archivo 2");
// readFilePromise("archivo2.txt", "utf-8").then((text) => {
//   console.log("Second Text: ", text);
// });

// console.log("Fin del programa");
