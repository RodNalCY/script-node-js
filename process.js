// // Argumentos de entrada
// console.log(process.argv);

// // controlar el flujo de ejecucion
// process.exit(1);

// // controlar eventos del sistema
// process.on("exit", () => {
//   console.log("salir");
// });

// current working directory
console.log(process.cwd());

// informacion del sistema
console.log(process.platform);

// > set RODNAL=Hola node
// > node archivo.js
// Declarar variables de entorno
console.log(process.env.RODNAL);

// variables de entorno
console.log(process.env);

// version de node
console.log(process.version);
