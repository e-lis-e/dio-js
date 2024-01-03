class Person {
    nome;
    idade;
    nascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.nascimento = 2023 - idade;
    }

    descrever() {
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

}

//classe é a definição, instância é a ocorrência

function compare(p1, p2) {
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const elise = new Person('elise', 20);
const gabriel = new Person('gabriel', 20);

compare(elise, gabriel);