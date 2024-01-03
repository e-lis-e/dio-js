/* crie uma classe para representar carros
carros possuem:
- marca
- cor
- gasto médio de combustível por quilômetro rodado

crie um método que, dado a quantidade de quilômetros e o preço do combustível, nos dê o valor gasto em reais para realizar o percurso*/

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor (marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    calcularGastoDePercurso(distancia,preco) {
        return distancia * this.gastoMedio * preco;
    }
}

const miata = new Carro('mazda', 'azul claro', 1/12);
console.log(miata.calcularGastoDePercurso(70, 5));