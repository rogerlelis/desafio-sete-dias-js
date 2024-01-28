/* let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let limpeza = [];
let diversos = [];
let item;
let categoriaDoItem;

const nome = prompt('Escreva seu nome: ');
let adicionarLista = prompt(`Olá ${nome}, vamos começar sua lista de compras! \nSim. \nNão.`);

while(adicionarLista.toLowerCase() == 'sim') {
    item = prompt('Qual item deseja adicionar na sua lista?');
    categoriaDoItem = prompt('Qual a categoria do seu item? \n1 - Frutas. \n2 - Laticínios. \n3 - Doces. \n4 - Congelados. \n5 - Limpeza. \n6 - Diversos.');

    if(categoriaDoItem == 1) {
        frutas.push(item);
    } else if(categoriaDoItem == 2) {
        laticinios.push(item);
    } else if (categoriaDoItem == 3) {
        doces.push(item);
    } else if (categoriaDoItem == 4) {
        congelados.push(item);
    } else if (categoriaDoItem == 5) {
        limpeza.push(item);
    } else if(categoriaDoItem == 6) {
        diversos.push(item);
    } else {
        alert('Você não escreveu uma opção válida.');
    }
      adicionarLista = prompt('Deseja adicionar mais itens na sua lista? "Sim" ou "Não"?')
}

if (adicionarLista.toLowerCase() == 'não' || adicionarLista.toLowerCase() == 'nao') {
    alert(`Sua lista de compras: \nFrutas: ${frutas}. \nLaticínios: ${laticinios}. \nDoces: ${doces}. \nCongelados: ${congelados}. \nLimpeza: ${limpeza}. \nDiversos: ${diversos}. \nObrigado, volte sempre!`);
} else {
    alert('Opção inválida. Sua lista será exibida até agora.');
    alert(`Sua lista de compras parcial: \nFrutas: ${frutas}. \nLaticínios: ${laticinios}. \nDoces: ${doces}. \nCongelados: ${congelados}. \nLimpeza: ${limpeza}. \nDiversos: ${diversos}. \nObrigado, volte sempre!`);
} */