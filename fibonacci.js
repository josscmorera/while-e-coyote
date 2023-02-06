const prompt = require('prompt-sync')({sigint: true});

let n = Number(prompt('Enter a value: '));
let f1 = 0;
let f2 = 1;
let f3 = 0;
let t = 2;

if (n === 1) {
    console.log(f1);
} else {
    console.log(f1);
    console.log(f2);
    while (t < n) {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        console.log(f3);
        t++;
    }
}
