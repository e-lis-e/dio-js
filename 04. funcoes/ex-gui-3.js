function escrevaMeuNome(nome){
    return('meu nome é '+ nome);
}

function verificarIdade(idade){
    if (idade >= 18){
        console.log(escrevaMeuNome('elise') + ', sou maior');
    } else {
        console.log(escrevaMeuNome('elise') +', sou menor');
    }
}

verificarIdade(19);