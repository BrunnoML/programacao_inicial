let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio!!';

function clicarBotaoConsole() {
    console.log('O botão foi clicado!')
}

function clicarBotaoAlerta() {
    console.log('Eu Amo JS!')
}


function clicarBotaoPrompt() {
    let cidade = prompt('Diga o nome de uma cidade!');
    alert(`Estive em ${cidade} e lembrei de você!`)
}

function clicarBotaoSoma() {
    let primeiroNumero = prompt('Escolha o primeiro número!');
    primeiroNumero = parseFloat(primeiroNumero);
    let segundoNumero = prompt('Escolha o segundo número!');
    segundoNumero = parseFloat(segundoNumero);
    // Verifica se os inputs são números válidos
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        alert('Por favor, digite números válidos!');
    } else {
        // Realiza a soma dos números
    let soma = primeiroNumero + segundoNumero;

    alert(`A soma de ${primeiroNumero} com ${segundoNumero} tem como resultado ${soma}!`)
}
}