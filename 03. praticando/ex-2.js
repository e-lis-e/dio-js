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

const peso = 57;
const altura= 1.63;

const imc = peso / Math.pow(altura,2);
console.log(imc);

if (imc < 18.5){
    console.log('Abaixo do peso');
} else if (18.5 < imc < 25){
    console.log('Normal');
} else if (25 < imc < 30){
    console.log('Acima do Peso');
} else if (30 < imc < 40){
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}


