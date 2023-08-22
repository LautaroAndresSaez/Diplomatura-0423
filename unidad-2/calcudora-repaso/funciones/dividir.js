const dividir = (a, b) => {
  if (b === 0) {
    return "No es posible dividir por 0";
  }
  return a / b;
};

module.exports = dividir;
