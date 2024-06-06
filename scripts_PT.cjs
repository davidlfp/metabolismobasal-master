function calcTabelaIMC(imc) {
  const validationIMCNormal = imc >= 18.5 && imc <= 24.9
  const validationIMCSobrepeso = imc >= 25 && imc <= 29.9
  const validationIMCObesidade1 = imc > 30 && imc <= 34.9
  const validationIMCObesidade2 = imc > 35 && imc <= 39.9

  return imc < 18.5
    ? 'Magreza'
    : validationIMCNormal
    ? 'Normal'
    : validationIMCSobrepeso
    ? 'Sobrepeso'
    : validationIMCObesidade1
    ? 'Obesidade grau I'
    : validationIMCObesidade2
    ? 'Obesidade grau II'
    : imc > 40
    ? 'Obesidade grau III'
    : ''
}

module.exports = { calcTabelaIMC }