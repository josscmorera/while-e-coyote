const prompt = require('prompt-sync')({sigint: true});

let str = String(prompt('Enter a string: '));
let ctr = "";

while (ctr.length < 10) {
    ctr += str;
    console.log(ctr);
}