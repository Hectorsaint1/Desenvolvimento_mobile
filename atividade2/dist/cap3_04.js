"use strict";
const Aluno_ads = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};
for (const dados in Aluno_ads) {
    console.log(`${dados}: ${Aluno_ads[dados]}`);
}
