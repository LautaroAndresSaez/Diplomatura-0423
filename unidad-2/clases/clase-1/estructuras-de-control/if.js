const nombre = "cris";

const buscarSaldo = (nombre) => {
  let saldo = 0;
  if (nombre === "agus") {
    saldo = 500;
  } else if (nombre === "cris") {
    saldo = 300;
  } else if (nombre === "fede") {
    saldo = 1000;
  } else {
    saldo = 100;
  }
  return saldo;
};

const saldo = buscarSaldo("lauti");
console.log(saldo);
