//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

/*
let contador = 10;

while (contador >= 0) {
    console.log(contador);
    contador--;
}
*/

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/*
let numeroJogador;
numeroJogador = prompt('Escolha um número maior que zero!');

while (numeroJogador >= 0) {
    console.log(numeroJogador);
    numeroJogador--;
}
*/

//Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let numeroJogador = prompt('Escolha um número!');
let contador = 0;

while (contador <= numeroJogador) {
    console.log(contador);
    contador++;
}
