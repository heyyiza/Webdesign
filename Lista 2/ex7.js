/*Questão 7 - Escreva uma função chamada encontraMaiorNumero que recebe um array de numeros
como entrada e retorna o maior numero encontrado no array.*/
const encontrarMaiorNumero = (array) => Math.max(...array);
console.log(encontrarMaiorNumero([10,3,45,13]));