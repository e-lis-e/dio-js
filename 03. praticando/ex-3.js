/*Algoritmo que calcula o que deve ser pago por um produto

condições de pagamento:
- á vista no débito recebe 10% de desconto 
- á vista em dinheiro ou pix recebe 15% de desconto
- em duas vezes é o valor padrão
- mais que duas vezes é o valor da etiqueta + 10% de juros

*/

const preco = 100;
const formaPag = 4;

switch (formaPag) {
    case 1:
        console.log(preco - (preco*0.1));
        break;

    case 2:
        console.log(preco - (preco*0.15));
        break;
    case 3:
        console.log(preco);
        break;
    case 4:
        console.log(preco + (preco*0.1));
        break;
}