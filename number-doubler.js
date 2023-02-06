
const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt('Enter a number: '));
let n = 100;

while (num != n+1) {
    console.log(num);
    num *= 2;
    if (num >= n) {
        console.log(num);
        break;
    }
}