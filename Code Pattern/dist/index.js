"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
// Variáveis
var one = 1.2;
var two = "Esse é uma string";
var three = true;
// Arrays
var four = [1, 2, 3, 4];
var five = ["one", "two", "three", "four", "five"];
// Matriz bidimensional
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("bom dia");
console.log(five);
console.log(one);
// Estruturas de Verificação
if (one > four[0]) {
    console.log(`console diz: ${one} é maior que ${four[0]}`);
}
else {
    console.log("não é");
}
if (one < four[2]) {
    console.log(`console diz: ${one} é menor que ${four[2]}`);
}
else {
    console.log("não é");
}
// Estruturas de repetição
for (let i = 0; i < five.length; i++) { // array unidimensional
    console.log(five[i]);
}
for (let i = 0; i < four.length; i++) {
    for (let j = 0; j < four.length; j++) {
        console.log(four[i]);
        console.log("\n");
    }
}
// Imprime a matriz bidimensional
console.log("Imprimindo a matriz bidimensional:");
for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + " ";
    }
    console.log(row.trim());
}
//sistema de input
(() => __awaiter(void 0, void 0, void 0, function* () {
    let nome = yield (0, prompts_1.input)({ message: "Olá, bom dia! \nPoderia me informar seu nome?" });
    console.log(`Bom dia, ${nome}`); //mantenha o console.log dentro se n vai dar erro, e para fazer esse negocio de ${} e não precisar digitar aspas e + toda hora, basta usar crase invés de aspas
}))();
