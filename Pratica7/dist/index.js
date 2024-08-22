"use strict";
let val = [2.99, 10.50, 1.25, 4.80, 3.60];
let maior = 0;
let menor = 999;
for (let i = 0; i < val.length; i++) {
    for (let j = 0; j < val.length; j++) {
        if (val[j] > val[j + 1]) {
            let temp = val[j];
            val[j] = val[j + 1];
            val[j + 1] = temp;
        }
    }
}
console.log(val);
