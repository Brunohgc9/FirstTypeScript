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
console.log('hello world');
var number = 10;
console.log(number);
var string = "Teste";
console.log(string);
var array = [1, 2, number += 1];
for (let i = 0; i < 3; i++) {
    if (array[i] > 4) {
        array.push(array[i] + 1);
        console.log(array);
    }
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    let nmb = yield (0, prompts_1.input)({ message: "Quantos número você deseja no array?" });
    let op = yield (0, prompts_1.input)({ message: "Insira qual será sua operação: + - * /" });
    let mod = yield (0, prompts_1.input)({ message: "Insira de quantos em quantos você deseja realizar a operação" });
    var array2 = [0];
    for (let i = 0; i <= parseInt(nmb); i++) {
        if (array2[i] == null) {
            switch (op) {
                case "+":
                    array2[i] = array2[i - 1] + parseInt(mod);
                    break;
                case "-":
                    array2[i] = array2[i - 1] - parseInt(mod);
                    break;
                case "*":
                    array2[i] = array2[i - 1] * parseInt(mod);
                    break;
                case "/":
                    array2[i] = array2[i - 1] / parseInt(mod);
                    break;
                default:
                    op = yield (0, prompts_1.input)({ message: "Operação Inválida, redigite novamente: + - * /" });
                    i = 0;
            }
        }
    }
    console.log(array2);
}))();
