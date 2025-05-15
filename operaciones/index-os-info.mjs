import {
  platform,
  type,
  arch,
  cpus,
  freemem,
  totalmem,
  homedir,
  uptime,
  userInfo,
} from "node:os";

console.log("Plataforma: ", platform());
console.log("Nombre del Sistema Operativo: ", type());
console.log("Arquitectura: ", arch());
console.log("CPUs: ", cpus());
console.log("Memoria Libre: ", freemem() / 1024 / 1024 / 1024);
console.log("Memoria Total: ", totalmem() / 1024 / 1024 / 1024);
console.log("Directorio Home: ", homedir());
console.log("Tiempo de ejecución: ", uptime() / 60 / 60);
console.log("Usuario actual: ", userInfo());
