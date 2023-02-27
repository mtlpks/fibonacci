prompt = require("prompt-sync")();
const numero = prompt("Entre com um número: ");
const fibonacciArr = [0, 1];
for (let i = 2; fibonacciArr[i - 1] < numero; i++) {
    fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
}
if (fibonacciArr.includes(numero)) {
    console.log("Este número pertence à sequência.")
} else {
    console.log("Este número não pertence à sequência.")
}
