/*Questão 4 - Dado o array numeros = [1,2,3,4,5,6,7,8,9,10], escreva uma função que 
receba um array e retorne um array de numeros impares.*/
let numerosImpares = [1,2,3,4,5,6,7,8,9,10].filter(num=>num%2!==0);
console.log(numerosImpares);