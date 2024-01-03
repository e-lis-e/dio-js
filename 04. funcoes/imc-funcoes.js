/*Cálculo de IMC

formula de IMC:
imc = peso / (altura*altura)

Condições do IMC em adultos:
- abaixo de 18.5 = Abaixo do peso;
- entre 18.5 e 25 = Normal;
- entre 25 e 30 = Acima do peso;
- entre 30 e 40 = Obeso;
- acima de 40 = Obesidade Grave;
*/

function calcImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (18.5 < imc < 25) {
    return "Normal";
  } else if (25 < imc < 30) {
    return "Acima do Peso";
  } else if (30 < imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade Grave";
  }
}

function main() {
  const peso = 57;
  const altura = 1.63;
  const imc = calcImc(peso, altura);

  console.log(classImc(imc));
}

main();
