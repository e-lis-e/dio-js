/*crie uma classe para representar pessoas
atributos:
- nome
- peso
- altura

após, calcular valor do IMC (imc = peso/(altura²))
instanciar pessoa chamada josé, que tem 70kg e 1,75 de altura, e pedir pra dizer seu imc*/

class Pessoa {
    nome;
    altura;
    peso;

    constructor(nome, altura, peso){
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    calcImc(){
        return this.peso / (this.altura*this.altura);
    }

    classificarImc(){
        const imc = this.calcImc();
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

}

const jose = new Pessoa('josé', 1.75, 70);
console.log(jose.calcImc());
console.log(jose.classificarImc());