const fs = require("node:fs");

console.log("Lee el archivo 1");
const firstText = fs.readFileSync("archivo.txt", "utf-8");
console.log(firstText);

console.log("Procesando...");

console.log("Lee el archivo 2");
const secondText = fs.readFileSync("archivo2.txt", "utf-8");
console.log(secondText);

console.log("Fin del programa");
