/*Questão 5 - Crie um array chamado cidades=["Sorocaba","Piedade","Votorantim"]. Em seguida, usando
métodos de array, adicione uma nova cidade no inicio do array e remova a ultima cidade.*/
let cidades = ["Sorocaba", "Piedade", "Votorantim"];
cidades.unshift("São Paulo");
cidades.pop();
console.log(cidades);