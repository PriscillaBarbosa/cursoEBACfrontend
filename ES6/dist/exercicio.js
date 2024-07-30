"use strict";

// Array de objetos com nome e nota dos alunos
var alunos = [{
  nome: 'Luiza',
  nota: 4
}, {
  nome: 'Priscilla',
  nota: 7
}, {
  nome: 'Carlos',
  nota: 5
}, {
  nome: 'Julia',
  nota: 9
}, {
  nome: 'Alisson',
  nota: 8
}];

// Função que retorna apenas os alunos com nota maior ou igual a 6
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

// Chamando a função e exibindo os alunos aprovados
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);