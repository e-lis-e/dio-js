/*valor de viagem
variáveis:
- preço do etanol
- preço da gasolina
- tipo de combustível
- gasto médio
- distância em km da viagem

imprimir no console valor que será gasto
*/

const etanol = 3.99;
const gasosa = 5.04;
const gastoMedio = 12;
const dist = 1580;
const tipo = 'etanol';

const consumido = dist / gastoMedio;

if (tipo === 'etanol'){
    const resultado = consumido * etanol;
    console.log(resultado.toFixed(2));
} else {
    const resultado = consumido * gasosa;
    console.log(resultado.toFixed(2));
}
