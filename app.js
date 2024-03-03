const { crearArchivo } = require("./helpers/multiplicar.js");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

// console.log(argv);

// const [, , arg3 = "base=5"] = process.argv;
// const [, base = 5] = arg3.split("=");

// const base = 3;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) =>
    console.log(nombreArchivo.rainbow, colors.rainbow("creado"))
  )
  .catch((err) => console.log(err));
