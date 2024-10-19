const alunos = [
    {nome: 'Izabelly', idade: 19},
    {nome: 'João', idade: 8},
    {nome: 'Augusto', idade: 20},
    {nome: 'Joaquim', idade: 13}
];
const alunosMaiores = (alunos) => alunos.filter(aluno=>aluno.idade>18);
console.log(alunosMaiores(alunos));