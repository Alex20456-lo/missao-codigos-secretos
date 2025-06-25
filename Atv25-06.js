 let prompt = require('prompt-sync')(); // Módulo para entrada de dados no terminal

// 1. Solicita senha com até 3 tentativas
const senhaCorreta = 1234;
let tentativas = 0;
let acessoConcedido = false;

while (tentativas < 3) {
    let senhaDigitada = Number(prompt("Digite a senha de acesso: "));

    if (senhaDigitada === senhaCorreta) {
        console.log("Acesso concedido!\n");
        acessoConcedido = true;
        break;
    } else {
        tentativas++;
        console.log(`Senha incorreta. Tentativas restantes: ${3 - tentativas}`);
    }
}

if (!acessoConcedido) {
    console.log("Acesso negado. Número máximo de tentativas excedido.");
    process.exit(); // Encerra o programa
}

// 2. Menu interativo com switch
let opcao;

do {
    console.log("\n===== MENU =====");
    console.log("1 - Tabuada de Soma");
    console.log("2 - Tabuada de Subtração");
    console.log("3 - Tabuada de Multiplicação");
    console.log("4 - Tabuada de Divisão");
    console.log("5 - Fatorial");
    console.log("6 - Encerrar");

    opcao = Number(prompt("Escolha uma opção: "));
    let numero;

    if (opcao >= 1 && opcao <= 5) {
        numero = Number(prompt("Digite o número desejado: "));
    }

    switch (opcao) {
        case 1:
            console.log(`\nTabuada de Soma para ${numero}:`);
            for (let i = 0; i <= 10; i++) {
                console.log(`${numero} + ${i} = ${numero + i}`);
            }
            break;

        case 2:
            console.log(`\nTabuada de Subtração para ${numero}:`);
            for (let i = 0; i <= 10; i++) {
                console.log(`${numero} - ${i} = ${numero - i}`);
            }
            break;

        case 3:
            console.log(`\nTabuada de Multiplicação para ${numero}:`);
            for (let i = 0; i <= 10; i++) {
                console.log(`${numero} * ${i} = ${numero * i}`);
            }
            break;

        case 4:
            if (numero === 0) {
                console.log("Não é possível dividir por zero.");
            } else {
                console.log(`\nTabuada de Divisão para ${numero}:`);
                for (let i = 1; i <= 10; i++) {
                    console.log(`${numero} / ${i} = ${(numero / i).toFixed(2)}`);
                }
            }
            break;

        case 5:
            if (numero < 0) {
                console.log("Fatorial não é definido para números negativos.");
            } else {
                let fatorial = 1;
                for (let i = 1; i <= numero; i++) {
                    fatorial *= i;
                }
                console.log(`Fatorial de ${numero} é ${fatorial}`);
            }
            break;

        case 6:
            console.log("Encerrando o programa...");
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }

} while (opcao !== 6);

