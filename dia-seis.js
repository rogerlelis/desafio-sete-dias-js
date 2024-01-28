/* let frutas = [];
let laticinios = [];
let bebidas = [];
let doces = [];
let congelados = [];
let limpeza = [];
let outros = [];
let item;
let categoria;

const nome = prompt('Digite seu nome:  ');
let adicionarLista = prompt(`Olá ${nome}, vamos começar sua lista de compras? \nSim. \nNão.`);
let removerItem;

while (adicionarLista.toLowerCase() == 'sim') {
    item = prompt('Qual item deseja colocar na sua lista?');
    categoria = prompt('Qual a categoria do seu item? \n1 - Frutas. \n2 - Laticínios. \n3 - Bebidas. \n4 - Doces. \n5 - Congelados. \n6 - Limpeza. \n7 - Outros.');

    if (categoria == 1) {
        frutas.push(item);
    } else if (categoria == 2) {
        laticinios.push(item);
    } else if (categoria == 3) {
        bebidas.push(item);
    } else if (categoria == 4) {
        doces.push(item);
    } else if (categoria == 5) {
        congelados.push(item);
    } else if (categoria == 6) {
        limpeza.push(item);
    } else if (categoria == 7) {
        outros.push(item);
    } else {
        alert('Escolha uma opção válida.');
    }

    adicionarLista = prompt('Deseja acrescentar mais itens na sua lista? "Sim" ou "Não".');
}

while (adicionarLista.toLowerCase() == 'não' || adicionarLista.toLowerCase() == 'nao') {
    removerItem = prompt(`Sua lista de compras: \nFrutas: ${frutas}. \nLaticínios: ${laticinios}. \nBebidas: ${bebidas}. \nDoces: ${doces}. \nCongelados: ${congelados}. \nLimpeza: ${limpeza}. \nOutros: ${outros}. \n\nDeseja remover algum item da lista? "Sim" ou "Não"?`);

    if (removerItem.toLowerCase() != 'sim') {
        alert('Obrigado, volte sempre!');
        break;  
    }

    categoria = prompt('Qual a categoria do item que deseja remover: \n1 - Frutas. \n2 - Laticínios. \n3 - Bebidas. \n4 - Doces. \n5 - Congelados. \n6 - Limpeza. \n7 - Outros.');

    let itemRemover = prompt('Qual item deseja remover?');

    if (categoria == 1 && frutas.indexOf(itemRemover) !== -1) {
        frutas.splice(frutas.indexOf(itemRemover), 1);
    } else if (categoria == 2 && laticinios.indexOf(itemRemover) !== -1) {
        laticinios.splice(laticinios.indexOf(itemRemover), 1);
    } else if (categoria == 3 && bebidas.indexOf(itemRemover) !== -1) {
        bebidas.splice(bebidas.indexOf(itemRemover), 1);
    } else if (categoria == 4 && doces.indexOf(itemRemover) !== -1) {
        doces.splice(doces.indexOf(itemRemover), 1);
    } else if (categoria == 5 && congelados.indexOf(itemRemover) !== -1) {
        congelados.splice(congelados.indexOf(itemRemover), 1);
    } else if (categoria == 6 && limpeza.indexOf(itemRemover) !== -1) {
        limpeza.splice(limpeza.indexOf(itemRemover), 1);
    } else if (categoria == 7 && outros.indexOf(itemRemover) !== -1) {
        outros.splice(outros.indexOf(itemRemover), 1);
    } else {
        alert('Escolha uma opção válida ou item não encontrado.');
    }
}

alert(`Lista final:
Frutas: ${frutas}
Laticínios: ${laticinios}
Bebidas: ${bebidas}
Doces: ${doces}
Congelados: ${congelados}
Limpeza: ${limpeza}
Outros: ${outros}`); */