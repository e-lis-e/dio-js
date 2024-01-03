const {gets, print} = require('./aula');

const sorteados = [];

for (let i = 0; i < 5; i++) {
    const sorteado = gets();
    sorteados.push(sorteado);
}

let maiorValor = 0;
for (let i = 0; i < sorteados.length; i++) {
    const sorteado = sorteados[i];
    if (sorteado > maiorValor) {
        maiorValor = sorteado;
    }
    
}
print(maiorValor);