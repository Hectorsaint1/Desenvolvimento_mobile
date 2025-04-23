"use strict";
function verificarAprovacao(array_alunos) {
    for (const aluno of array_alunos) {
        let soma = 0;
        for (const nota of aluno.notas) {
            soma += nota;
        }
        const media = soma / aluno.notas.length;
        let situacao;
        if (media >= 7) {
            situacao = "Aprovado";
        }
        else if (media >= 5) {
            situacao = "Recuperação";
        }
        else {
            situacao = "Reprovado";
        }
        console.log(`${aluno.nome} - Média: ${media.toFixed(2)} - ${situacao}`);
    }
}
const alunos_ads = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
];
verificarAprovacao(alunos_ads);
