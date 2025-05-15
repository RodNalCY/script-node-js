const os = require("node:os");

console.log("Plataforma: ", os.platform());
console.log("Nombre del Sistema Operativo: ", os.type());
console.log("Arquitectura: ", os.arch());
console.log("CPUs: ", os.cpus());
console.log("Memoria Libre: ", os.freemem() / 1024 / 1024 / 1024);
console.log("Memoria Total: ", os.totalmem() / 1024 / 1024 / 1024);
console.log("Directorio Home: ", os.homedir());
console.log("Tiempo de ejecución: ", os.uptime() / 60 / 60);
console.log("Usuario actual: ", os.userInfo());
