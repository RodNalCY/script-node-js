const path = require("node:path");

// Linux > /home/user/Documents/curso-nodejs/archivo.txt
// Windows > C:\Users\user\Documents\curso-nodejs\archivo.txt

// barra separadora de directorios segun SO
console.log(path.sep);

// unir rutas path.join
const filePath = path.join(__dirname, "disquito", "archivo.txt");
console.log(filePath);

const base = path.basename("/temp/midu/secret/password.txt");
console.log(base);

const fileName = path.basename("/temp/midu/secret/password.txt", ".txt");
console.log(fileName);

const extension = path.extname("/temp/midu/secret/password.txt");
console.log(extension);
