/*Questão 3 - Dado o array numeros = [10,20,30,40,50], escreva uma função que receba
um array e retorne a soma de todos os elementos desse array.*/
let numeros = [10,20,30,40,50];
function somaArray(array) {
    let soma = 0;
    for (let i =0;i<array.length;i++){
        soma+=array[i];
    }
    return soma;
}
console.log(somaArray(numeros));