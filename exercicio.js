//exercicio 1
const indice = 13;
let soma = 0;
let k = 0;

while (k < indice) {
  k += 1;
  soma += 1;
}

console.log("Exercicio 1\n" + soma);

//Exercicio 2
let n = prompt("Digite o número que deseja verificar: ");
var sequencia = [0, 1];
for (let i = 2; i < n; i++) {
  sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
}
console.log("Exercicio 2\n" + sequencia);

//exercicio 5
let palavra;
let palavraInvertida = "";
palavra = prompt("Digite a palavra: ");
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}
console.log(palavraInvertida);
