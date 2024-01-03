/*média de notas

algoritmo que analisa 3 notas e dá a média

media = (nota 1 + nota 2 + nota 3) / 3

media < 5 reprova
5 < media < 7 vai pra recu
media > 7 aprova

*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

const tres = (nota1 + nota2 + nota3);

const media = (tres)/3;


if (media < 5){
    console.log('Reprovação');
} else if (5 < media < 7){
    console.log('Recuperação');
} else {
    console.log("Passou de Semestre");
}
