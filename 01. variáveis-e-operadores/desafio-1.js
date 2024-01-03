// preço do combustível
//gasto médio do carro por km
//distância da viagem

const precoComb = 5.79;
const gastoMedio = 12;
const dist = 1580;

const consumido = dist/gastoMedio;
const resultado = consumido * precoComb;

console.log(resultado.toFixed(2));

 