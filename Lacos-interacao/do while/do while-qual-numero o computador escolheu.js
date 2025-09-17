// execute iste codigo no console do devtools

let isCorrect = false;
let selectedNUmber = Math.floor(Math.random() * 10) + 1;

console.log(selectedNUmber);

do {
    let guess = prompt("Qual o valor o computador escolheu de 1 a 10?");

    if (Number(guess) === selectedNUmber) isCorrect = true;
} while (!isCorrect);
