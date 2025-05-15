import { readFile } from "node:fs/promises";

Promise.all([
  readFile("archivo.txt", "utf-8"),
  readFile("archivo2.txt", "utf-8"),
]).then(([firstText, secondText]) => {
  console.log("First Text: ", firstText);
  console.log("Second Text: ", secondText);
});
