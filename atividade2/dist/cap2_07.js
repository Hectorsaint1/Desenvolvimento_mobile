"use strict";
const aluno = {
    nome: "hector",
    notas: [6, 7, 8],
    frequencia: 80
};
let soma = 0;
for (const nota of aluno.notas) {
    soma += nota;
}
const media = soma / aluno.notas.length;
let result;
if (aluno.frequencia < 75) {
    result = "Reprovado por falta";
}
else if (media >= 7) {
    result = "Aprovado";
}
else if (media >= 5) {
    result = "Recuperação";
}
else {
    result = "Reprovado por nota";
}
console.log(`Aluno: ${aluno.nome}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Frequência: ${aluno.frequencia}%`);
console.log(`Resultado: ${result}`);
