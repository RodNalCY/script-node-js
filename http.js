// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   console.log("request received");
//   res.end("Hola Mundo");
// });

// // Puerto 0 -> el sistema operativo asigna un puerto aleatorio
// server.listen(0, () => {
//   console.log(`Server is running on port ${server.address().port}`);
// });

const http = require("node:http");
const { findAvailablePort } = require("./free-port.js");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola Mundo");
});

// Encontrar un puerto disponible
findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
  });
});
