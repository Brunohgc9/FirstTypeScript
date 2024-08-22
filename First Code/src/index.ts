import { input } from "@inquirer/prompts";

console.log('hello world')

var number: number = 10
console.log(number)

var string: string = "Teste"
console.log(string)

var array: number[] = [1, 2, number += 1]

for (let i = 0; i < 3; i++) {
    if (array[i] > 4) {
        array.push(array[i] + 1)
        console.log(array)
    }
}

(async () => {
    let nmb = await input({ message: "Quantos número você deseja no array?" })
    let op = await input({message: "Insira qual será sua operação: + - * /"})
    let mod = await input({message: "Insira de quantos em quantos você deseja realizar a operação"})
    var array2: number[] = [0]
    for (let i = 0; i < parseInt(nmb); i++){
        if(array2[i] == null){
            switch (op){
                case "+":
                    array2[i] = array2[i - 1] + parseInt(mod)
                break
                case "-":
                    array2[i] = array2[i - 1] - parseInt(mod)
                    break
                case "*":
                    array2[i] = array2[i - 1] * parseInt(mod)
                    break
                case "/":
                    array2[i] = array2[i - 1] / parseInt(mod)
                    break
                default:
                    op = await input({message: "Operação Inválida, redigite novamente: + - * /"})
                    i = 0


            }
        }
    }
    console.log(array2)
})()

