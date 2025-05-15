// const fs = require("node:fs/promises");

// const folder = process.argv[2] ?? "./";

// fs.readdir(folder)
//   .then((files) => {
//     files.forEach((file) => {
//       console.log(file);
//     });
//   })
//   .catch((err) => {
//     if (err) {
//       console.log("Error al leer el directorio", err);
//       return;
//     }
//   });

const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? "./";

async function main(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.log(pc.red("Error al leer el directorio"), error);
    process.exit(1);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath);
    } catch (error) {
      console.log("Error al leer el archivo", error);
      process.exit(1);
    }

    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "directory" : "file";
    const fileSize = stats.size;
    const fileModified = stats.mtime.toLocaleString();

    return { name: file, fileType, fileSize, fileModified };
  });

  const filesInfo = await Promise.all(filesPromises);
  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo);
  });

  // filesInfo.forEach((fileInfo) => {
  //   console.log(
  //     pc.green(fileInfo.name),
  //     pc.blue(fileInfo.fileType),
  //     pc.yellow(fileInfo.fileSize),
  //     pc.red(fileInfo.fileModified)
  //   );
  // });
}

main(folder);
