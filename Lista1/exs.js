/*Exercicio 1 - Escreva um programa que declare duas variaveis numericas e realzie as quatro operacoes
matematicas basicas (+,-,*,/). Imprima os resultados no console. */
let a = 5;
let b = 10;
let soma = a + b;
let subtracao = a - b;
let divisao = a / b;
let multiplicacao = a * b;

console.log("Soma: " + soma);
console.log("Subtracao: " + subtracao);
console.log("divisao: " + divisao);
console.log("multiplicacao: " + multiplicacao);

/*Exercicio 2 - Faca um programa que mostre os numeros impares em um intervalo de 0 a 100.*/
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

/*Exercicio 3 - Faca um programa que mostre a quantidade de caracteres para o texto "Diciplina de programacao para web"*/
let texto = 'Diciplina de programacao web';
let qtdecaracteres = texto.length;
console.long("Quantidade de caracteres: " + qtdecaracteres);

/*Exercicio 4 - Faca um programa que receba o nome de uma variavel e mostre o <<primeiro>>.<<ultimo nome>>@facens.br*/
function gerarEmail(nomeCompleto) {
    const partes = nomeCompleto.trim().split(' ');
    if (partes.length < 2) {
        console.log("Por favor, forneça um nome e sobrenome.");
        return;
    }
    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];
    const email = `${primeiroNome.toLowerCase()}.${ultimoNome.toLowerCase()}@facens.br`;
    console.log(email);
}

/*Exercicio 5 - Escreva um programa que imprima os numeros de 1 a 10 no console usando na mesma linha estrutura de repeticao. 
Os numeros devem ser separados por um traco, ex: 1 - 2 - 3 - ... - 10. Observacao: apos o numero 10 nao pode ter um traco.*/
for (let i = 1; i <= 10; i++) {
    process.stdout.write(i.toString());
    if (i < 10) {
        process.stdout.write(' - ');
    }
}
console.log();


/*Exercicio 6 - Faca uma funcao que mostre o dobro do numero passado. Caso o numero seja menor ou igual a zero mostrar a mensagem "So e 
aceito numeros positivos maiores que zero".*/
function mostrarDobro(numero) {
    if (numero <= 0) {
        console.log("Só é aceito números positivos maiores que zero.");
    } else {
        const dobro = numero * 2;
        console.log(`O dobro de ${numero} é ${dobro}.`);
    }
}

/*Exercicio 7 - Escreva uma funcao que recebe uma string como argumento e retorna a string invertida.*/
function inverterString(str) {
    return str.split('').reverse().join('');
}

/*Exercicio 8 - Escreva uma funcao que recebe uma string como argumento e retorna o numero de vogais presente nessa string. Considere
apenas vogais minusculas (a,e,i,o,u).*/
function contarVogais(str) {
    const vogais = 'aeiou';
    let contador = 0;
    for (let char of str.toLowerCase()) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

/*Exercicio 9 - Escreva uma funcao que receba um endereco de email como argumento e retorna true se o email for valido e false caso o contrario.
Um email valido deve conter um unico simbolo '@' e pelo menos um '.' apos o @.*/
function validarEmail(email) {
    const hasSingleAt = email.indexOf('@') === email.lastIndexOf('@');
    const atIndex = email.indexOf('@');
    const hasDotAfterAt = email.indexOf('.', atIndex) !== -1;
    return hasSingleAt && hasDotAfterAt;
}

/*Exercicio 10 - Excreva uma funcao que verifique se uma determinada string e um palindromo (ou seja, pode ser lida da mesma forma tanto
da direita para esquerda quanto da esquerda para direita).*/
function ehPalindromo(str) {
    const strLimpa = str.replace(/\s+/g, '').toLowerCase();
    const strInvertida = strLimpa.split('').reverse().join('');
    return strLimpa === strInvertida;
}
