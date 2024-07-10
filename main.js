// 1 - Algoritmo que lê os valores de A, B, C e imprime a soma de A e B, mostrando se é menor que C.
const A = parseFloat(prompt("Digite o valor de A: "));
const B = parseFloat(prompt("Digite o valor de B: "));
const C = parseFloat(prompt("Digite o valor de C: "));

const soma = A + B;
console.log(`Soma de A e B: ${soma}`);

if (soma < C) {
    console.log("A soma é menor que C");
} else {
    console.log("A soma não é menor que C");
}






// 2 - Algoritmo que lê dois valores inteiros A e B, soma ou multiplica de acordo com a condição e atribui a C.
const A = parseInt(prompt("Digite o valor de A: "));
const B = parseInt(prompt("Digite o valor de B: "));

let C;
if (A === B) {
    C = A + B;
} else {
    C = A * B;
}

console.log(`Valor de C: ${C}`);






// 3 - Algoritmo que recebe um número inteiro e imprime seu antecessor e sucessor.
const numero = parseInt(prompt("Digite um número inteiro: "));

const antecessor = numero - 1;
const sucessor = numero + 1;

console.log(`Antecessor: ${antecessor}, Sucessor: ${sucessor}`);






// 4 - Algoritmo que lê o valor do salário mínimo e do salário de um usuário, calcula e imprime quantos salários mínimos o usuário ganha.
const salarioMinimo = 1293.20;
const salarioUsuario = parseFloat(prompt("Digite o valor do seu salário: "));

const quantidadeSalariosMinimos = salarioUsuario / salarioMinimo;

console.log(`Você ganha ${quantidadeSalariosMinimos.toFixed(2)} salários mínimos.`);







// 5 - Algoritmo que lê três valores inteiros diferentes e imprime em ordem decrescente.
const valores = [];

for (let i = 0; i < 3; i++) {
    valores.push(parseInt(prompt(`Digite o valor ${i + 1}: `)));
}

valores.sort((a, b) => b - a);
console.log(`Valores em ordem decrescente: ${valores}`);






// 6 - Algoritmo que calcula o IMC e imprime a condição de acordo com a tabela.
const peso = parseFloat(prompt("Digite seu peso (kg): "));
const altura = parseFloat(prompt("Digite sua altura (m): "));

const imc = peso / (altura ** 2);
console.log(`IMC: ${imc.toFixed(1)}`);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso ideal (parabéns)");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Levemente acima do peso");
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade grau I");
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade grau II (severa)");
} else {
    console.log("Obesidade grau III (mórbida)");
}







// 7 - Algoritmo que lê três notas obtidas por um aluno e imprime a média.
const notas = [];

for (let i = 0; i < 3; i++) {
    notas.push(parseFloat(prompt(`Digite a nota ${i + 1}: `)));
}

const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);







// 8 - Algoritmo que lê quatro notas obtidas por um aluno, calcula a média, imprime o nome e se foi aprovado ou reprovado.
const nomeAluno = prompt("Digite o nome do aluno: ");
const notas = [];

for (let i = 0; i < 4; i++) {
    notas.push(parseFloat(prompt(`Digite a nota ${i + 1}: `)));
}

const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
console.log(`Nome do aluno: ${nomeAluno}`);
console.log(`Média das notas: ${media.toFixed(2)}`);

if (media >= 7) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}
