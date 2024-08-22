import { input } from "@inquirer/prompts"
// Variáveis
var one: number = 1.2
var two: string = "Esse é uma string"
var three: boolean = true

// Arrays
var four: number[] = [1, 2, 3, 4]
var five: string[] = ["one", "two", "three", "four", "five"]

// Matriz bidimensional
var matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log("bom dia")
console.log(five)
console.log(one)

// Estruturas de Verificação
if (one > four[0]) {
    console.log(`console diz: ${one} é maior que ${four[0]}`)
} else {
    console.log("não é")
}

if (one < four[2]) {
    console.log(`console diz: ${one} é menor que ${four[2]}`)
} else {
    console.log("não é")
}

// Estruturas de repetição
for (let i = 0; i < five.length; i++) { // array unidimensional
    console.log(five[i])
}

for (let i = 0; i < four.length; i++) {
    for (let j = 0; j < four.length; j++) {
        console.log(four[i])
        console.log("\n")
    }
}

// Imprime a matriz bidimensional
console.log("Imprimindo a matriz bidimensional:")

for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + " ";
    }
    console.log(row.trim());
}

//sistema de input
(async() => {
    let nome = await input({message: "\nOlá, bom dia! \nPoderia me informar seu nome?"})
    console.log(`Bom dia, ${nome}`) //mantenha o console.log dentro se n vai dar erro, e para fazer esse negocio de ${} e não precisar digitar aspas e + toda hora, basta usar crase invés de aspas
})()