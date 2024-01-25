let numeroSecreto = parseInt(Math.random() * 10 + 1);
console.log(numeroSecreto);

let escolherNumero = "";
let contador = 1;

while (contador <= 3) {
    escolherNumero = prompt("Escolha um número de 1 a 10: ");

  if (escolherNumero == numeroSecreto) {
    alert("Parabéns! Você acertou!");
    break;
  } else if(contador <= 1) {
    alert("Você ainda tem duas chances!");
    escolherNumero;
  } else if(contador <= 2){
    alert('Você ainda tem uma chance!');
    escolherNumero;
  } else {
    alert('Você errou todas as alternativas =/');
  }
  contador++
}
