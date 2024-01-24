const nome = prompt('Olá! Seja bem-vindo! Escreva seu nome: ');

let frontEnd = 1;
let backEnd = 2;

let escolhaLinguagem; 

while(true) {
  escolhaLinguagem = prompt(`${nome}, para qual área pretende seguir? \n${frontEnd} - FrontEnd. \n${backEnd} - BackEnd.`);

  if(escolhaLinguagem == 1) {
    prompt(`Compreendo ${nome}! Você pretende seguir para a área de FrontEnd! E o que quer aprender: \nReact.  \nVue.`);
    break;
  } else if (escolhaLinguagem == 2) {
    prompt(`Compreendo ${nome}! Você pretende seguir para a área de BackEnd! E o que quer aprender: \nJava. \nC#. `);
    break;
  } else {
    alert(`${nome}, escolha inválida! Por favor, escolha apenas 1 ou 2.`);
  }
}

const especializacaoNaArea = 1;
const especializacaoFullStack = 2; 

let escolhaEspecializacao; 

while(true) {
  escolhaEspecializacao = prompt(`${nome}, você escolheu a área da programação e o que pretende aprender, agora escolha: \n${especializacaoNaArea} - Pretende seguir se especializando na área escolhida? \n${especializacaoFullStack} - Pretende seguir se desenvolvendo para se tornar FullStack?`);

  if(especializacaoNaArea == 1) {
    alert('Focar e se aprofundar na sua área é uma escolha inteligente. Continue crescendo e se destacando!');
    break;
  } else if (especializacaoNaArea == 2) {
    alert('Explorar o Fullstack é desafiador e recompensador. Siga em frente e construa sua jornada versátil na programação!');
    break;
  } else {
    alert('Escolha inválida! Por favor, escolha apenas 1 ou 2');
  }
}

let especializacaoTecnologias;
let condicao = 'pronto';

alert(`Parabéns por ter chegado até aqui ${nome}! Por fim, nos conte quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer`);

while(especializacaoTecnologias !== condicao) {
  especializacaoTecnologias = prompt(`Responda uma de cada vez, e quando não houver mais escolhas digite "${condicao}" : `);
}

alert(`Obrigado por participar ${nome}! Volte sempre que puder!`)

