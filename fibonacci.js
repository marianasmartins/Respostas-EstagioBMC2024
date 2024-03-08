/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

function isFibbonacci(num) {
  let fib1 = 0;
  let fib2 = 1;
  while (fib2 < num) {
    [fib1, fib2] = [fib2, fib1 + fib2];
  }
  return fib2 === num;
}

const numberInput = document.getElementById("number-input");
const checkButton = document.getElementById("check-button");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
  const num = parseInt(numberInput.value);
  if (isNaN(num)) {
    result.textContent = "Por favor, digite um número válido";
  } else if (isFibbonacci(num)) {
    result.textContent = `O número ${num} faz parte da sequência de Fibonacci`;
  } else {
    result.textContent = `O número ${num} não faz parte da sequência de Fibonacci`;
  }
});
