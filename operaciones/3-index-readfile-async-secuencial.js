// Modo Asíncrono Secuencial
// First Example
const { readFile } = require("node:fs/promises");
// async function main() {
//   console.log("Lee el archivo 1");
//   const firstText = await readFile("archivo.txt", "utf-8");
//   console.log("First Text: ", firstText);
//   console.log("Procesando...");
//   console.log("Lee el archivo 2");
//   const secondText = await readFile("archivo2.txt", "utf-8");
//   console.log("Second Text: ", secondText);
//   console.log("Fin del programa");
// }

// main();

// Second Example
(async () => {
  console.log("Lee el archivo 1");
  const firstText = await readFile("archivo.txt", "utf-8");
  console.log("First Text: ", firstText);

  console.log("Procesando...");

  console.log("Lee el archivo 2");
  const secondText = await readFile("archivo2.txt", "utf-8");
  console.log("Second Text: ", secondText);

  console.log("Fin del programa");
})();
