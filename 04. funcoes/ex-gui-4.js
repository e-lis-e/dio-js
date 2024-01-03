function aplicarDesconto(preco, desconto){
    return (preco - (preco * (desconto/100)));
}
function aplicarDesconto(preco, juros){
    return (preco + (preco * (juros/100)));
}

const preco = 100;
const formaPag = 4;

switch (formaPag) {
    case 1:
        console.log(aplicarDesconto(preco, 10));
        break;

    case 2:
        console.log(aplicarDesconto(preco, 15));
        break;
    case 3:
        console.log(preco);
        break;
    case 4:
        console.log(aplicarjuros(preco, 10));
        break;
}

console.log(10 / 200);