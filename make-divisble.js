const prompt = require('prompt-sync')({sigint: true});

let x = Number(prompt('Enter x: '));
console.log("> " + x)
let y = Number(prompt('Enter y: '));
console.log("> " + y)

if (y === 1) {
    console.log(+ x +" is divisible by " + y);
} while (x % y !== 0) {
    x++;
    console.log(+ x +" is divisible by " + y);
}
