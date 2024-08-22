let val: number[] = [2.99, 10.50, 1.25, 4.80, 3.60]
let maior = 0
let menor = 999

for(let i = 0; i < val.length; i++){

    for(let j = 0; j < val.length; j++){
        if (val[j] > val[j + 1]) { //se o valor atual for maior que o proximo valor ele ira fazer o valor atual receber o proximo valor e o proximo valor receber o valor do valor atual
            let temp = val[j]; //tipo no autal eu tenho 2 e o proximo é 3, então eu crio uma variavel para manter o valor atual, passo o 3 como valor atual e o proximo valor que antes era 3 irá virar 2
            val[j] = val[j + 1];
            val[j + 1] = temp;
        }
    }

}

console.log(val)