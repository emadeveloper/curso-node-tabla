const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;

      consola += `${colors.yellow(base)} ${"x".yellow} ${colors.yellow(i)} ${
        "=".yellow
      } ${colors.yellow(base * i)}\n`;
    }

    if (listar) {
      console.log("===============".blue);
      console.log("Tabla del:".yellow, colors.yellow(base));
      console.log("===============".blue);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
  } catch (error) {
    throw error;
  }
  return `tabla-base-${base}.txt`;
};

module.exports = {
  crearArchivo,
};
