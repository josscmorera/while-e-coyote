const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt('Enter a number: '));
let n = 0;

while (num !== 0) { 
    n += num;
    console.log("Sum: " + n);
    num = Number(prompt('Enter a new number: '))
}
console.log(n);