let nome = prompt("Qual é o seu nome?");
let idade = prompt("Qual é sua idade?");
let linguagem = prompt("Qual linguagem de programação você estuda?");

alert(`Olá ${nome}! Você tem ${idade} e já está aprendendo ${linguagem}`);

let pergunta = prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para SIM ou 2 para NÃO.`);

if (pergunta == "1") {
  alert(`Muito bom! Continue estudando e você terá muito sucesso!`);
} else {
  alert("Ah que pena... Já tentou aprender outras linguagens?");
}