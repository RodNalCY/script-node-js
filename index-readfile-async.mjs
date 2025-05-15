import fs from "node:fs/promises";

console.log("Lee el archivo 1");
const firstText = await fs.readFile("archivo.txt", "utf-8");
console.log("First Text: ", firstText);

console.log("Procesando...");

console.log("Lee el archivo 2");
const secondText = await fs.readFile("archivo2.txt", "utf-8");
console.log("Second Text: ", secondText);

console.log("Fin del programa");
