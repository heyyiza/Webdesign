/*Questão 6 - Crie um objeto chamado aluno com as propriedades nome, idade, curso e matrícula. 
Adicione um método chamado mostrarInformacoes que exibe todas as inofrmacoes do aluno.*/
let aluno = {
    nome: "Izabelly",
    idade: 19,
    curso: "Computação",
    matricula: 235410, mostrarInformacoes: function(){
        console.log(this.nome, this.idade, this.curso, this.matricula);
    }
};
aluno.mostrarInformacoes();