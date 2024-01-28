
let soma = 1;
let subtracao = 2;
let multiplicacao = 3;
let divisao = 4;
let sair = 5;

function calculadora() {
    let num1 = parseFloat(prompt('Digite o primeiro número: '));
    let num2 = parseFloat(prompt('Digite o segundo número: '));
    let operacao = parseInt(prompt(`Escolha uma operação matemática: \n1 - Soma. \n2 - Subtração. \n3 - Multiplicação. \n4 - Divisão. \n5 - Sair.`));

    switch (operacao) {
        case soma:
            let resultadoSoma = num1 + num2;
            alert(`Resultado da soma: ${resultadoSoma}`);
            break;
        case subtracao:
            let resultadoSubtracao = num1 - num2;
            alert(`Resultado da Subtração: ${resultadoSubtracao}`);
            break;
        case multiplicacao:
            let resultadoMultiplicacao = num1 * num2;
            alert(`Resultado da Multiplicação: ${resultadoMultiplicacao}`);
            break;
        case divisao:
            let resultadoDivisao = num1 / num2;
            alert(`Resultado da Divisão: ${resultadoDivisao}`);
            break;
        case sair:
            alert("Saindo da calculadora.");
            break;
        default:
            alert("Opção inválida. Por favor, escolha uma operação válida.");
    }
}

calculadora();